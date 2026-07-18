import { User } from "../models/User.js";

export class UserRepository {
  static async findAll() {
    return User.find().lean();
  }

  static async findByEmail(email) {
    return User.findOne({ email }).lean();
  }

  static async create(data) {
    const user = new User(data);
    await user.save();
    return user.toObject();
  }
}
