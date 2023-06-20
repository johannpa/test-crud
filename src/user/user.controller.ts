import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDto } from "./dto/createUserDto";
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get(':id')
    findOne(@Param("id") id: string) {
        return ({user:{
            id: id,
        }});
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return createUserDto;
    }

    @Patch()
    @Put()
    @Delete()
}
