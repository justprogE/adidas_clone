import { GraphQLError } from 'graphql';
import { cookies, headers } from 'next/headers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../lib/prisma';

const hash = 10;

export const ACCESS_KEY = 'secretAccessToken';
export const REFRESH_KEY = 'secretKey';
const TOKEN_LIVE = 30 * 24 * 60 * 60;

const checkToken = async () => {
  const token = headers().get('authorization')?.split(' ')?.[1] || '';
  return jwt.verify(token, ACCESS_KEY) as { id: string; email: string };
};

export const apolloResolvers = {
  Query: {
    getUser: async (_: any, a: any, ctx: any) => {
      try {
        const user = await checkToken();
        return prisma.user.findUnique({
          // @ts-ignore
          where: { id: Number(user?.id) },
        });
      } catch (e) {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 401 },
          },
        });
      }
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      args: {
        where: { email: string; password: string; cart: any[]; points: number };
      },
    ) => {
      console.log('args: ', args);
      const loginUser = await prisma.user.findUnique({
        where: {
          email: args.where.email,
        },
      });
      console.log('loginUser: ', loginUser);
      if (loginUser) {
        const checkPassword = await bcrypt.compare(
          args.where.password,
          loginUser.password,
        );
        console.log('check: ', checkPassword);
        if (!checkPassword) {
          return { message: 'Wrong password.' };
        }
        const accessToken = jwt.sign(
          { id: loginUser.id, email: loginUser.email },
          ACCESS_KEY,
          { expiresIn: '2m' },
        );
        const refreshToken = jwt.sign(
          {
            id: loginUser.id,
            email: loginUser.email,
            password: loginUser.password,
          },
          REFRESH_KEY,
          { expiresIn: '30d' },
        );
        cookies().set({
          name: 'refreshToken',
          value: refreshToken,
          domain: 'localhost',
          expires: new Date(Date.now() + TOKEN_LIVE * 1000),
          httpOnly: true,
        });
        console.log('loginUser return: ', {
          user: { ...loginUser },
          token: accessToken,
        });
        return { user: { ...loginUser }, token: accessToken };
      }
      const hashPassword = await bcrypt.hash(args.where.password, hash);
      const user = await prisma.user.create({
        data: {
          email: args.where.email,
          password: hashPassword,
          cart: args.where.cart,
          points: Number(args.where.points),
        },
      });
      if (!user) {
        return { message: 'Something went wrong' };
      }
      console.log('user created: ', user);
      const accessToken = jwt.sign(
        { id: user.id, email: user.email },
        ACCESS_KEY,
        { expiresIn: '2m' },
      );
      const refreshToken = jwt.sign(
        { id: user.id, email: user.email, password: user.password },
        REFRESH_KEY,
        { expiresIn: '30d' },
      );
      cookies().set({
        name: 'refreshToken',
        value: refreshToken,
        domain: 'localhost',
        expires: new Date(Date.now() + TOKEN_LIVE * 1000),
        httpOnly: true,
      });
      return { user, token: accessToken };
    },
    generateTokens: async () => {
      try {
        const tokenAuth = (cookies().get('refreshToken') ?? '') as string;
        console.log('tokenAuth: ', tokenAuth);
        //@ts-ignore
        const payload = jwt.verify(tokenAuth.value, REFRESH_KEY) as {
          id: string;
          email: string;
        };
        console.log('payload: ', payload);
        const user = await prisma.user.findUnique({
          where: {
            id: Number(payload.id),
            email: payload.email,
          },
        });
        if (!user) {
          return undefined;
        }
        const accessToken = jwt.sign(
          { id: user.id, email: user.email },
          ACCESS_KEY,
          { expiresIn: '2m' },
        );
        const refreshToken = jwt.sign(
          { id: user.id, email: user.email, password: user.password },
          REFRESH_KEY,
          { expiresIn: '30d' },
        );
        cookies().set({
          name: 'refreshToken',
          value: refreshToken,
          domain: 'localhost',
          expires: new Date(Date.now() + TOKEN_LIVE * 1000),
          httpOnly: true,
        });
        console.log({ user, token: accessToken });
        return { user, token: accessToken };
      } catch (e) {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 400 },
          },
        });
      }
    },
    deleteUser: async (_: any, args: { where: { id: number } }) => {
      try {
        const user = await checkToken();
        return prisma.user.delete({
          where: {
            id: Number(user.id),
          },
        });
      } catch {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 401 },
          },
        });
      }
    },
    updateUserDetails: async (
      _: any,
      args: { where: { firstName: string; lastName: string; gender: string } },
      ctx: any,
    ) => {
      try {
        const user = await checkToken();
        return prisma.user.update({
          where: {
            //@ts-ignore
            id: Number(user?.id),
          },
          data: {
            firstName: args.where.firstName,
            lastName: args.where.lastName,
            gender: args.where.gender,
          },
        });
      } catch {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 401 },
          },
        });
      }
    },
    updateUserPassword: async (
      _: any,
      args: { where: { oldPassword: string; newPassword: string } },
      ctx: any,
    ) => {
      try {
        const user = await checkToken();
        const newPasswordHash = await bcrypt.hash(args.where.newPassword, 10);

        return prisma.user.update({
          where: {
            //@ts-ignore
            id: Number(user.id),
          },
          data: {
            password: newPasswordHash,
          },
        });
      } catch {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 401 },
          },
        });
      }
    },
    updateUserEmail: async (
      _: any,
      args: { where: { email: string } },
      ctx: any,
    ) => {
      try {
        const user = await checkToken();
        return prisma.user.update({
          where: {
            //@ts-ignore
            id: Number(user?.id),
          },
          data: {
            email: args.where.email,
          },
        });
      } catch {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            http: { status: 401 },
          },
        });
      }
    },
  },
};
