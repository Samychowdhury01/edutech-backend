/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { model, Schema } from 'mongoose';
import { IUserModel, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { role } from './user.constant';

const userSchema = new Schema<TUser, IUserModel>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: role,
      default: 'user',
    },
    isLoggedIn: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// bcrypt password before save into database
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user?.password,
    Number(config.sault_rounds),
  );
  next();
});

// removing the password field after saving the data
userSchema.post('save', function (doc: any, next) {
  // Convert the document to an object and remove the fields
  delete doc._doc.password;
  next();
});

// compare the plain password and hashed password before user login
userSchema.statics.isPasswordMatched = async function (
  plainPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const User = model<TUser, IUserModel>('User', userSchema);
