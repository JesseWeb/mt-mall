import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('question')

export class QuestionEntity {
   @CreateDateColumn({ type: `timestamp` })
   createdAt?: string
   @UpdateDateColumn({ type: `timestamp` })
   updatedAt?: string
   @DeleteDateColumn({ type: `timestamp` })
   deletedAt?: string;

   @PrimaryGeneratedColumn('increment')
   id?: number
   @Column()
   question: string
   @Column()
   answer0: string
   @Column({nullable:true})
   answer1?: string
   @Column({nullable:true})
   answer2?: string
   @Column({nullable:true})
   answer3?: string
   @Column()
   correctIndex: number
}