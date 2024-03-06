import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity('reviews')
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, user => user.reviews)
    user!: User

    @Column({nullable: false})
    rating!: number

    @Column({nullable: false})
    review!: string
};