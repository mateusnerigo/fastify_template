import jwt from 'jsonwebtoken';
import { constants } from '../config';

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, constants.jwt.secret);
  } catch (err) {
    return false
  }
}

export function sign(payload: any) {
  try {
    return jwt.sign(payload, constants.jwt.secret);
  } catch (err) {
    console.log({ 'Error signing payload': err });
    return false;
  }
}
