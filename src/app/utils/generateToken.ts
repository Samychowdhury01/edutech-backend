/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
export const generateToken = (
  payload: any,
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};
