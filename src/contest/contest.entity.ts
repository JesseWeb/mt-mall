import { UserEntity } from "src/user/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('contest')

export class ContestEntity {
   @CreateDateColumn({ type: `timestamp` })
   createdAt?: string
   @UpdateDateColumn({ type: `timestamp` })
   updatedAt?: string
   @DeleteDateColumn({ type: `timestamp` })
   deletedAt?: string;

   @PrimaryGeneratedColumn('increment')
   id?: number

   @Column()
   prize: number

   @ManyToOne(() => UserEntity, user => user.contest)
   user: UserEntity;

}