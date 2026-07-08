// src/auth/auth.controller.ts
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObj: RegisterAuthDto) {
    console.log(userObj);
    return userObj;
  }

  @Post('login')
  login(@Body() credenciales: LoginAuthDto) {
    return this.authService.login(credenciales);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req) {
    return req.user;
  }
}
