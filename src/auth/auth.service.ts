import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { mgs: 'I have signed up' };
  }

  signin() {
    return { mgs: 'I have signed in' };
  }
}
