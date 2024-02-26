import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
        default: "unknown user"
    })
    name!: string

    @Column({nullable: false})
    phone!: string

    @Column({nullable: false})
    email!: string

    @Column({nullable: false})
    age!: number

    @OneToMany(() => Book, book => book.user)
    books!: Book[]
};