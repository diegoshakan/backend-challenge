import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TravelModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5438,
    username: "postgres",
    password: "postgres",
    database: "base_project",
    autoLoadEntities: true,
    synchronize: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
