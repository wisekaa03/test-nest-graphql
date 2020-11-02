import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(type => ID)
  authorId: number;

  @Field()
  name: string;
}