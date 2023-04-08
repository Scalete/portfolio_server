import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Works, WorksDocument } from './works.schema';

@Injectable()
export class WorksService {
  constructor(@InjectModel(Works.name) private worksModel: Model<WorksDocument>) {}

  async create(work: Works): Promise<Works> {
    const createdWork = new this.worksModel(work);
    return createdWork.save();
  }

  async findAll(): Promise<Works[]> {
    return this.worksModel.find().exec();
  }

  async findWithRank(): Promise<Works[]> {
    return this.worksModel.find({ rank: { $gt: 0 } }).sort({ rank: 1 }).exec();
  }

  async findOne(id: string): Promise<Works> {
    return this.worksModel.findById(id).exec();
  }
}