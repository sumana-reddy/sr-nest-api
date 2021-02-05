import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { LocationModule } from './location/location.module';
import { Connection } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(), QuestModule, UserModule, LocationModule],
    
})
export class AppModule {
  constructor(private connection: Connection) {}
}



