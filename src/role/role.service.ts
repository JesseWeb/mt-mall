import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseProvider } from 'src/core/baseProvider';
import { UserEntity } from 'src/user/user.entity';
import { Like, ObjectID, Repository } from 'typeorm';
import { RoleEntity } from './role.entity';

@Injectable()
export class RoleService extends BaseProvider {
   constructor(@InjectRepository(RoleEntity) private roleRepo: Repository<RoleEntity>) {
      super()
   }

   create(role: RoleEntity) {
      let roleTobeSave = this.roleRepo.create(role)
      return this.roleRepo.save(roleTobeSave)
   }
   getAll(pageSize: number, pageNumber: number, keyWord: string = '') {
      return this.roleRepo.find({
         where: {
            name: Like(`%${keyWord}%`)
         },
         skip: pageSize * pageNumber,
         take: pageSize,
         select: [
            'id',
            'name',
            'createdAt'
         ]
      })
   }

   findOne(id: string | number | Date | ObjectID,) {
      return this.roleRepo.createQueryBuilder('role')
         .andWhere((qb) => {
            const subQuery = qb.subQuery()
               .from('user_roles_role', 'user_role')
               .select(`user_role.roleId`)
               .where('user_role.userId = :userId')
               .getQuery()
            return `role.id in ${subQuery}`
         })
         .setParameter('userId', `user_role.userId`)
         .getOne()



      // .where({
      //    id
      // })
      // .leftJoin('role.users', 'users')
      // .select(['role.name', 'role.id', 'users.nickname', 'users.id'])
      // .getOne()
   }
   findOneRole(id: string | number | Date | ObjectID) {
      return this.roleRepo.findOne(id)
   }
   save(roleEntity: RoleEntity) {
      return this.roleRepo.save(roleEntity)
   }

   softDelete(id: number) {
      return this.roleRepo.softDelete(id)
   }
}
