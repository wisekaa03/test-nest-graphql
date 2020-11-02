import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorEntity } from './author.entity';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  pageCount: number;

  @ManyToOne(() => AuthorEntity, { nullable: true, onDelete: 'SET NULL' })
  author?: AuthorEntity;
}