import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from './entities/travel.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TravelService {

  constructor(
    @InjectRepository(Travel)
    private readonly travelRepository: Repository<Travel>,
  ) {}

  async create(createTravelDto: CreateTravelDto) {
    const travel = await this.travelRepository.create(createTravelDto);
    return this.travelRepository.save(travel)
  }

  findAll() {
    return this.travelRepository.find({
      order: {
        goal: "ASC",
      }
    });
  }

  async findOne(id: number) {

      const travel = await this.travelRepository.findOne({ where: { id }})

      if (!travel) {
        throw new NotFoundException(`Travel id ${id} not found`)
      }

      return travel
  }

  async update(id: number, updateTravelDto: UpdateTravelDto) {
    const travel = await this.travelRepository.preload({
      id: id,
      ... updateTravelDto
    });

    if (!travel) {
      throw new NotFoundException(`Travel ID ${id} not found!`)
    }

    return this.travelRepository.save(travel);
  }

  async remove(id: number) {
    const travel = await this.travelRepository.findOne({ where: { id }});

    if (!travel) {
      throw new NotFoundException(`Travel ID ${id} not found!`);
    }

    return this.travelRepository.remove(travel);
  }
}
