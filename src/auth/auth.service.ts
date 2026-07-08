// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(credenciales: LoginAuthDto) {
    const payload = { email: 'admin@gmail.com', id: 1 };
    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}