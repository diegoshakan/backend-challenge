import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('travels')
export class Travel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    place: string;

    @Column()
    goal: Date;

    @Column()
    flag_url: string

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
