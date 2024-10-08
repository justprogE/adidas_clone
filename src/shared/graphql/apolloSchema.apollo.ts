import { gql } from 'graphql-tag';

export const apolloSchema = gql`
  type User {
    id: ID!
    email: String
    password: String
    favorites: [String]
    cart: [CartUser]
    vouchers: [String]
    firstName: String
    lastName: String
    gender: String
    points: Int
  }

  type CartUser {
    productId: String
    size: String
    quantity: Int
  }

  input Cart {
    productId: String
    size: String
    quantity: Int
  }

  type Message {
    message: String
  }

  type Query {
    getUser: User
  }

  type Mutation {
    createUser(where: CreateUserType): Auth!
    deleteUser(where: UserIdType): User!
    logoutUser: Message

    generateTokens: Token

    updateUserCart(where: UpdateCartType): User!
    updateUserDetails(where: UpdateDetailsType): User!
    updateUserPassword(where: UpdatePasswordType): User!
    updateUserEmail(where: UpdateEmailType): User!
    updateUserFavorites(where: UpdateFavoritesType): User!

    updateUserVouchers(where: UpdateVouchersType): User!
  }

  type Auth {
    user: User
    token: String
  }

  type Token {
    token: String
  }

  input UserIdType {
    id: ID
  }

  input CreateUserType {
    email: String!
    password: String!
    cart: [Cart]
    points: Int!
  }

  input UpdateDetailsType {
    firstName: String
    lastName: String
    gender: String
  }

  input UpdatePasswordType {
    oldPassword: String
    newPassword: String
  }

  input UpdateEmailType {
    email: String
  }

  input UpdateCartType {
    cart: [Cart]
  }

  input UpdateFavoritesType {
    favorites: [String]
  }

  input UpdateVouchersType {
    vouchers: [String]
    points: Int
  }
`;
