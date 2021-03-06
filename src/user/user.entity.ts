import { RoleEntity } from "src/role/role.entity";
import { Column, Entity, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";


enum EUSER {
   UNACTIVATED,
   ACTIVATED,
   BLOCK
}
@Entity('user')
export class UserEntity {
   @CreateDateColumn({ type: `timestamp` })
   createdAt?: string
   @UpdateDateColumn({ type: `timestamp` })
   updatedAt?: string
   @DeleteDateColumn({ type: `timestamp` })
   deletedAt?: string;

   @PrimaryGeneratedColumn('increment')
   id?: string

   @Generated('uuid')
   @Column('uuid')
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


   @ManyToMany(() => RoleEntity, role => role.users)
   @JoinTable()
   roles?: RoleEntity[];
}
