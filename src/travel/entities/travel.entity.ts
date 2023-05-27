import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
      nullable: true,
      default: () => 'CURRENT_TIMESTAMP',
      })
    createdAt?: Date;

    @Column({
      nullable: true,
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;
}
