'use server';

import { redirect } from 'next/navigation';

async function navigate(path = '') {
  redirect(`/${path}`);
}

export default navigate;
