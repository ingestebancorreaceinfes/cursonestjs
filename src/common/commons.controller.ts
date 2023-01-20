import { HttpStatus, HttpCode, Delete, NotFoundException } from "@nestjs/common";
import { Body, Get, Param, Post } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { CommonsService } from "./commons.service";

export abstract class CommonsController<T> {

    abstract getService(): CommonsService<T>;

    @Get()
    async findAll(): Promise<T[]>{
        return await this.getService().findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<T>{
        const item = await this.getService().findOne(id);
        if( !item ) 
            throw new NotFoundException(`Item with id "${ id }" not found`)
        return item;
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T): Promise<T>{
        return await this.getService().save(entity);
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]): Promise<T[]>{
        return await this.getService().saveMany(entities);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id', ParseIntPipe) id:any){
        const item = await this.getService().findOne(id);
        if( !item ) 
            throw new NotFoundException(`Item with id "${ id }" not found`)
        return this.getService().delete(id);
    }

}