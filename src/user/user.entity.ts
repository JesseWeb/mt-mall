import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";


enum EUSER {
   UNACTIVATED,
   ACTIVATED,
   BLOCK
}
@Entity('user')
export class UserEntity {
   @Column('datetime', { name: 'created_at'})
   createdAt?: Date

   @Column('datetime', { name: 'updated_at'})
   updatedAt?: Date

   @Column('datetime', { name: 'deleted_at', nullable: true, default: null })
   deletedAt?: Date

   @PrimaryGeneratedColumn('increment')
   id?: string

   @Generated('uuid')
   uuid?: string

   @Column({ nullable: true })
   realname?: string

   @Column({ nullable: true })
   openid?: string

   @Column({ nullable: true })
   unionid?: string

   @Column({
      default: EUSER.UNACTIVATED,
   })
   status?: EUSER

   @Column({ nullable: true })
   username?: string

   @Column({ nullable: true })
   password?: string


   @Column({ nullable: true })
   nickname: string



}