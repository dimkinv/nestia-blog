import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';
import zod from 'zod';
import { MonsterDto } from './dto/monster.dto';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) { }

  @Post()
  async create(@Body() createMonsterDto: CreateMonsterDto): Promise<MonsterDto> {
    return this.monstersService.create(createMonsterDto);
  }

  @Get()
  async findAll(): Promise<MonsterDto[]> {
    return this.monstersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MonsterDto> {
    return this.monstersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMonsterDto: UpdateMonsterDto): Promise<void> {
    return this.monstersService.update(+id, updateMonsterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.monstersService.remove(+id);
  }
}


const personSchema = zod.object({
  name: zod.string(),
  family: zod.string(),
}).brand('person');

type Person = zod.infer<typeof personSchema>;

personSchema.parse({})