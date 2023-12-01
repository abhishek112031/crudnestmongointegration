import { Injectable } from '@nestjs/common';
import { CreateuserDto } from 'src/dto/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/entity/user.entity';
import { NotFoundException } from '@nestjs/common';

import mongoose from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly newUser: Model<User>
    ){}

    //add user:

    async addUserService(user:CreateuserDto){
        const newuser=new this.newUser({
            first_name:user.first_name,
            last_name:user.last_name,
            age:user.age,
            email:user.email

        })

        const saveUser=await newuser.save()

        if(saveUser){

            return {user:user,message: 'user is added successfully!' }
        }
        if(!saveUser){
            throw new NotFoundException("something is wrong");
        }

    }

    //find by id:
    async findUserByIdService(id:string){
        const find_user=await this.newUser.findById(id);
        if(find_user){
            return {user:find_user,message: 'successfull!' }
        }
        else{
            throw new NotFoundException("something is wrong");

        }
    }
    //update user:
    async updateUserService(id:string,bodyData:CreateuserDto){
        const updatedUser=await this.newUser.findOneAndUpdate({_id:new mongoose.Types.ObjectId(id)},{
            first_name:bodyData.first_name,
            last_name:bodyData.last_name,
            age:bodyData.age,
            email:bodyData.email

        });

        if(updatedUser){
            return {user:updatedUser,message: 'updated successfully!' }
        }
        else{
            throw new NotFoundException("something is wrong");

        }
    }
    
    //delete user:

    async deleteUserByIdService(id:string){
        let delUser=await this.newUser.findByIdAndDelete(id);

        if(delUser){
            return {user:delUser,message: 'deleted successfully!' }
        }
        else{
            throw new NotFoundException("something is wrong");

        }


    }
    //find all users
    async findAllUserService(){
        let allUsers=await this.newUser.find();
        return {allUsers:allUsers,message:'Data fetched successfully!!'}
    }
    
}
