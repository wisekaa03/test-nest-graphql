import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Book } from './book.model';
import { Author } from './author.model';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(returns => [Book])
  async books(@Args('withAuthor', { nullable: true, type: () => Boolean }) withAuthor?: boolean) {
    return this.appService.find(withAuthor);
  }

  @Mutation(returns => Author)
  async createAuthor(@Args('name', { type: () => String }) name: string) {
    return this.appService.createAuthor(name);
  }

  @Mutation(returns => Book)
  async createBook(
    @Args('name', { type: () => String }) name: string,
    @Args('pageCount', { nullable: true, type: () => Int }) pageCount: number,
    @Args('authorId', { nullable: true, type: () => Int }) authorId: number,
  ) {
    return this.appService.createBook({ name, pageCount, authorId });
  }
}
