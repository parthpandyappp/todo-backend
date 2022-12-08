import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cluster0.fshaxev.mongodb.net/', {
      dbName: 'TestApi',
      user: 'parthpandyappp',
      pass: 'YVvUwvbo9rYgkXmQ',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TodoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
