import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly dbUser:UserService){}

    @UseGuards(JwtAuthGuard)
    @Get('/allUser')
    async getAllUser(
        @Res() res
    ){
        try {
            const result= await this.dbUser.findAllUser();
            return res.status(HttpStatus.OK).send(result)
        } catch (error) {
            throw new Error('Failed to fetch details');
        }
    }
}
