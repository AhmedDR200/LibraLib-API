import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";


@Entity('books')
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
        default: "unknown book"
    })
    title!: string

    @Column({
        nullable: false,
        default: "unknown author"
    })
    author!: string

    @Column({
        nullable: false,
        default: "unknown genre"
    })
    genre!: string

    @ManyToOne(() => User, user => user.books)
    user!: User
};