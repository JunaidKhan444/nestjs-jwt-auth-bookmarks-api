import { Body, Controller, ParseIntPipe, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("signup")
    // signup(@Req() req: Request) { used for Express. It is hard coded.. Never do like this
    signup(@Body() dto: AuthDto) {
        // signup(@Body("email") email: string, @Body("password", ParseIntPipe) password: string) {
        return this.authService.signup();
    }

    @Post("signin")
    signin() {
        return this.authService.signin();
    }
}
