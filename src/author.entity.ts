import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;
}