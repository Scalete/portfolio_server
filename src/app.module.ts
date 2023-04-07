import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorksModule } from './works/works.module';
import { BlogsModule } from './blogs/blogs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WorksModule,
    BlogsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
],
})
export class AppModule {}