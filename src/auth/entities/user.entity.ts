import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column('text', {
        unique: true
    })
    email: string;

    @Column('text', {
        select: false
    })
    password: string;

    @Column('text')
    fullName: string;

    @Column({
        type: 'bool',
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

}
