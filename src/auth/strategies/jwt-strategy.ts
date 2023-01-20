import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

export class JwtStrategy extends PassportStrategy( Strategy ){

    constructor(
        @InjectRepository( User )
        private readonly userRepository: Repository<User>,
        //configService: ConfigService
    ){
        super({
            //secretOrKey: configService.get('JWT_SECRET')
            secretOrKey: '12312123123',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validate( payload: JwtPayload ): Promise<User>{
        
        const { email } = payload;
        
        const user = await this.userRepository.findOneBy({email});

        if( !user )
            throw new UnauthorizedException('Token not valid')
        
        if( !user.isActive )
            throw new UnauthorizedException('User is inactive, talk with an admin');

        return user;
    }
}