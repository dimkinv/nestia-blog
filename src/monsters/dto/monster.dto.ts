import { IsNumber, Max, Min } from 'class-validator';
import { CreateMonsterDto } from './create-monster.dto';
import { ApiProperty } from '@nestjs/swagger';

export class MonsterDto extends CreateMonsterDto {
    @ApiProperty({ example: 123456, description: 'The id of the Monster', type: Number, minimum: 100000, maximum: 999999  })
    @IsNumber()
    @Min(100000)
    @Max(999999)
    id!: number;
}