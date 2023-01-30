import { Logger } from "@nestjs/common";
import { BadRequestException, InternalServerErrorException, NotFoundException } from "@nestjs/common/exceptions";
import { FindManyOptions, Repository } from "typeorm";
import { PaginationDto } from "./dto/pagination.dto";

export abstract class CommonsService<T> {
    abstract getRepository(): Repository<T>;
    private readonly logger = new Logger('CommonsService');

    findAll(paginationDto:PaginationDto): Promise<T[]> {
        
        const {limit =10, offset=0} = paginationDto;
        
        return this.getRepository().find({
            take: limit,
            skip: offset,
        });
    }

    async findOne(id: any): Promise<T> {
        const item = await this.getRepository().findOneBy(id);

        if( !item )
            throw new NotFoundException(`Item with ${id} not found`)

        return item;
    }

    save(entity: T): Promise<T>{
        try{
            return this.getRepository().save(entity);
        }catch(error){
            this.handleDBExceptions(error);
        }
    }

    saveMany(entities: T[]): Promise<T[]> {
        return this.getRepository().save(entities);
    }

    async delete(id: any){
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>): Promise<number>{
        return this.getRepository().count(options);
    }

    private handleDBExceptions(error:any){
        if( error.code === '23505')
            throw new BadRequestException(error.detail);

        this.logger.error(error);
        throw new InternalServerErrorException('Unexpected error, check server logs');
    }
}
