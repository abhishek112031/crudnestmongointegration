
import { Body, Controller, Delete, Get, Param, Post ,Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateuserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post('/add-user')
    async addNewUser(@Body() data:CreateuserDto){
        return await this.userService.addUserService(data)
    }

    @Get('/:id')
    async findUserById(@Param('id') userId:string){
        return this.userService.findUserByIdService(userId)
    }

    @Delete('/:id')
    async findByIdAndDelete(@Param('id') userid:string){
        return this.userService.deleteUserByIdService(userid)
    }

    @Put('/update-user/:id')
    async findAndDeleteById(@Param('id') userId:string,@Body() userDto:CreateuserDto){
        return this.userService.updateUserService(userId,userDto);

    }

    @Get('/find-all-users')
    async findAllUsers(){
        return this.userService.findAllUserService()
    }





    
}
