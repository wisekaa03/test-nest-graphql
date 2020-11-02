import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { BookEntity } from './book.entity';
import { AuthorEntity } from './author.entity';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'QweAsdZxc321',
        database: 'test',
        entities: [BookEntity, AuthorEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([BookEntity, AuthorEntity]),

    GraphQLModule.forRootAsync({
      useFactory: () => ({
        debug: true,
        playground: true,
        autoSchemaFile: true,
      })
    }),
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
