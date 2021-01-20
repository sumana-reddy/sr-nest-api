import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Sumana!.';
  }

  getAbout(): string {
    return 'Sumana Reddy, Software Developer';
  }
}
