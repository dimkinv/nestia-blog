import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';
import { MonsterDto } from './dto/monster.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) { }

  @Post()
  async create(@Body() createMonsterDto: CreateMonsterDto): Promise<MonsterDto> {
    return this.monstersService.create(createMonsterDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all monsters',
    type: MonsterDto,
    isArray: true,
  })
  async findAll(): Promise<MonsterDto[]> {
    return this.monstersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get monster by id',
    type: MonsterDto,
  })
  async findOne(@Param('id') id: string): Promise<MonsterDto> {
    return this.monstersService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'update monster by id',
    type: MonsterDto,
  })
  async update(@Param('id') id: string, @Body() updateMonsterDto: UpdateMonsterDto): Promise<void> {
    return this.monstersService.update(+id, updateMonsterDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'delete monster by id',
  })
  async remove(@Param('id') id: string): Promise<void> {
    return this.monstersService.remove(+id);
  }
}