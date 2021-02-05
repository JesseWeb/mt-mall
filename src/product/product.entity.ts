import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum E_PRODUCT_STATUS {
   UNAVAILABLE,
   AVAILABLE,
   BLOCK
}
@Entity('product')
export class ProductEntity {
   @CreateDateColumn({ type: `timestamp` })
   createdAt?: string
   @UpdateDateColumn({ type: `timestamp` })
   updatedAt?: string
   @DeleteDateColumn({ type: `timestamp` })
   deletedAt?: string;

   @PrimaryGeneratedColumn('increment')
   id?: string

   @Column()
   name: string

   @Column({ type: `decimal`, nullable: true, default: null })
   price?: number

   @Column({ type: `tinyint` ,default:E_PRODUCT_STATUS.UNAVAILABLE})
   status?: E_PRODUCT_STATUS

}