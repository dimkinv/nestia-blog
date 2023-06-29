import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, MaxLength } from "class-validator";

export class CreateMonsterDto {
    @ApiProperty({ example: 'Monster', description: 'The name of the Monster', type: String, maxLength: 20 })
    @IsString()
    @MaxLength(20)
    name!: string;

    @ApiProperty({ example: 'Dragon', description: 'The type of the Monster', type: String, maxLength: 20 })
    @IsString()
    @MaxLength(20)
    type!: string;

    @ApiProperty({ example: 100, description: 'The age of the Monster', type: Number, minimum: 0, maximum: 999 })
    @IsInt()
    @Max(999)
    age!: number;

    @ApiProperty({ example: ['Fire Breath', 'Claws', 'Wings'], description: 'The features of the Monster', type: [String], maxLength: 40, isArray: true })
    @IsString({ each: true })
    @MaxLength(40, { each: true })
    features!: string[];
}
