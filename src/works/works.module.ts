import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Works, WorksSchema } from './works.schema';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Works.name, schema: WorksSchema }])],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}