import argon2 from 'argon2';

export async function verify(hash: any, password: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch (err) {
    console.log({ 'Error verifying hash/password': err });
    return false
  }
}

export async function hash(password: string): Promise<String | false> {
  try {
    return await argon2.hash(password)
  } catch (err) {
    console.log({ 'Error generating hash/password': err });
    return false
  }
}
