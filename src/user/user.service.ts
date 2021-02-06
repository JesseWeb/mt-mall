import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseProvider } from 'src/core/baseProvider';
import { RoleService } from 'src/role/role.service';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService extends BaseProvider {
   constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>, private roleService: RoleService) {
      super()
   }
   getUserByUUID(uuid) {
      return this.userRepo.find({
         where: {
            uuid
         }
      })
   }
   createUser(user: UserEntity) {
      return this.userRepo.save(user)
   }
   getUserByUsername(username: string) {
      return this.userRepo.findOne({
         where: {
            username
         },
         relations: ['roles']
      })
   }
   deleteUser(uuid: string) {
      return this.userRepo.softDelete({
         uuid
      })
   }
   update() {
   }

   async bindRole(userId: number, roleId: number) {
      let role = await this.roleService.findOne(roleId)
      let user = await this.userRepo.createQueryBuilder('user').where({
         id: userId
      }).leftJoinAndSelect('user.roles', 'roles').getOne()
      if (!role) throw new Error('角色不存在')
      if (!user) throw new Error('用户不存在')
      user.roles = user.roles || []
      user.roles.push(role)
      return await this.userRepo.save(user)
   }
   async findUserOfRole(roleId) {
      return this.userRepo.createQueryBuilder('user')
         .where((qb) => {
            const subQuery = qb.subQuery()
               .from('user_roles_role', 'userRole')
               .select('userId')
               .where(`roleId = ${roleId}`)
               .getQuery()
            return `user.id in ${subQuery}`
         })
         .leftJoin('user.roles', 'roles')
         .select([`user.id`, `user.nickname`,`roles.name`,`roles.id`])
         .getMany()
   }
}
