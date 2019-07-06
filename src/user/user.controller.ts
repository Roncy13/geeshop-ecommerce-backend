import { 
  Controller, 
  Get,
  Post,
  Delete
} from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get('info')
  info(): string {
    return 'Sample Information for User';
  }

  @Post('')
  authenticate(): string {
    return 'Authenticate for User';
  }

  @Delete('')
  logout(): string {
    return 'Logout for User';
  }
}
