import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Author } from './author.model';

@ObjectType()
export class Book {
  @Field(type => ID)
  bookId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  pageCount?: number;

  @Field(type => Author, { nullable: true })
  author?: Author;
}