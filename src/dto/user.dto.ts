import { IsNotEmpty, IsString, IsInt,IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateuserDto{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    first_name:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    last_name:string;


    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    age:number;


    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email:string;
    

}