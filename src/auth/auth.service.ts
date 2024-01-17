import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { mgs: 'I have signed up' };
  }

  signin() {
    return { mgs: 'I have signed in' };
  }
}
