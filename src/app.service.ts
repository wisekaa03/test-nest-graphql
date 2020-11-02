import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, IsNull, Not, Repository } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { BookEntity } from './book.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity>
  ) {}

  async find(withAuthor?: boolean): Promise<BookEntity[]> {
    const where: FindConditions<BookEntity> = {};
    if (withAuthor === true) {
      where.author = Not(IsNull());
    } else if (withAuthor === false) {
      where.author = IsNull();
    }
    return this.bookRepository.find({ where, relations: [ 'author' ] });
  }

  async createAuthor(name: string): Promise<AuthorEntity> {
    return this.authorRepository.save({ name });
  }

  async createBook({ name, pageCount, authorId }: { name: string; pageCount?: number; authorId?: number; }): Promise<BookEntity> {
    let author: AuthorEntity | undefined;
    if (authorId) {
      author = await this.authorRepository.findOne(authorId);
    }
    return this.bookRepository.save({ name, pageCount, author });
  }
}
