import { ProductEntity } from "src/product/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum E_STORE_STATUS {
   UNAVALIABLE,
   AVALABLE,
   BLOCK
}
@Entity('store')
export class StoreEntity {
   @CreateDateColumn({ type: `timestamp` })
   createdAt?: string
   @UpdateDateColumn({ type: `timestamp` })
   updatedAt?: string
   @DeleteDateColumn({ type: `timestamp` })
   deletedAt?: string;

   @PrimaryGeneratedColumn('increment')
   id?: number

   @Column({ type: `varchar` })
   name: string

   @ManyToMany(type => ProductEntity)
   @JoinTable()
   products?: ProductEntity[]

   @Column({ type: 'tinyint', default: E_STORE_STATUS.UNAVALIABLE })
   status?: E_STORE_STATUS
}