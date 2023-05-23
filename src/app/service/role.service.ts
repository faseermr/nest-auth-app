import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { RoleDocument } from '../schema/role.schema';
// interface IUser extends Document {

// }

@Injectable()
export class RoleService {
  constructor(@InjectModel('Role') private roleModel: Model<RoleDocument>) {}

  findByName(name: string) {
    return this.roleModel.find({ name: { $in: name } });
  }
}
