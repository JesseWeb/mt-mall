import { Column, Entity, Generated, PrimaryGeneratedColumn, Unique } from "typeorm";


enum EUSER {
   UNACTIVATED,
   ACTIVATED,
   BLOCK
}
@Entity('user')
export class UserEntity {
   @PrimaryGeneratedColumn('increment')
   id?: string

   @Generated('uuid')
   uuid?: string

   @Column({ nullable: true })
   realname?: string

   @Column({nullable: true})
   openid?: string

   @Column({nullable: true})
   unionid?: string

   @Column({
      default: EUSER.UNACTIVATED,
   })
   status?: EUSER

   @Column({nullable: true})
   username?: string

   @Column({nullable: true})
   password?: string


   @Column({nullable: true})
   nickname: string
}