import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return;
  }

  @Get('/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const user = await this.authService.googleLogin(req);
    console.log(user);
    return res.redirect(`http://localhost:3000/?user=${JSON.stringify(user)}`);
  }

  // @Get('/google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleAuthRedirect(@Req() req, @Res() res) {
  //   const { name, email, avatar } = req.user;

  //   // return res.redirect(
  //   //   this.getRedirectUrl(
  //   //     await this.authService.loginUser(email, name, avatar)));
  //   return this.authService.googleLogin(req);
  // }

  private getRedirectUrl(response: {
    token: string;
    userId: any;
    image: string;
  }) {
    // const redirectUrl = new URL(this.configService.get("AUTHREDIRECT_" + this.node_env + "_URL"));

    // redirectUrl.searchParams.set('token', response.token);
    // redirectUrl.searchParams.set('userId', response.userId);

    // return redirectUrl;
    return 'http://localhost:3000';
  }
}
