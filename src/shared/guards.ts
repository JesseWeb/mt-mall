import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/user/user.entity';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = request.session.user;
    user.roles = user.roles || []
    const hasRole = () => {
      return user.roles.some(role => !!roles.find(item => item === role.name))
    };
    return user && user.roles && hasRole();
  }
}

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const userSession = request.session?.user
    if (userSession) {
      return true
    }
    throw new UnauthorizedException()
  }
}