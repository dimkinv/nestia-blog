import { Injectable } from '@nestjs/common';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';

@Injectable()
export class MonstersService {
  create(createMonsterDto: CreateMonsterDto) {
    return {
      id: 1,
      name: 'Monster',
      type: 'Dragon',
      age: 100,
      features: ['Fire Breath', 'Claws', 'Wings']
    }
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'Monster',
        type: 'Dragon',
        age: 100,
        features: ['Fire Breath', 'Claws', 'Wings']
      },
    ];
  }

  findOne(id: number) {
    return {
      id: 1,
      name: 'Monster',
      type: 'Dragon',
      age: 100,
      features: ['Fire Breath', 'Claws', 'Wings']
    };
  }

  update(id: number, updateMonsterDto: UpdateMonsterDto) {
  }

  remove(id: number) {
  }
}
