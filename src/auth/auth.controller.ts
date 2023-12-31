import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post("signup")
    // signup(@Req() req: Request) { used for Express. It is hard coded.. Never do like this
    signup(@Body() dto: AuthDto) {
        // signup(@Body("email") email: string, @Body("password", ParseIntPipe) password: string) {
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}
