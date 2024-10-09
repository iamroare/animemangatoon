import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("/register")
    async registerUser(
        @Body() registerDto:{username: string,password: string}
    ){
        console.log("line 12",registerDto)
        const user = await this.authService.register(registerDto.username,registerDto.password);
        return {message: "user registered successfully",user};
    }

    @Post("/login")
    async userLogin(
        @Body() loginDto:{username:string, password: string}
    ){
        const user= await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
          }
          return await this.authService.login(user);
    }

}
