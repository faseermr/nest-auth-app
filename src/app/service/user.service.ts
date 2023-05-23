import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserDocument } from '../schema/user.schema';
// interface IUser extends Document {

// }

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  findAll() {
    return this.userModel.find().populate('roles', '-__v');
  }

  async create(data: any) {
    const user = await new this.userModel(data);
    return user.save();
  }
}
