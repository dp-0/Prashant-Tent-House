import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('')
    getUsers() {
        return { username: 'dinesh', email: 'myemail@gmail.com' };
    }
}
