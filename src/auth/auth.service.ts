import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: "hello, I'm signed up" };
  }

  signin() {
    return { msg: "hello, I'm signed in" };
  }
}
