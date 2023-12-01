import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/nestApp-01'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
