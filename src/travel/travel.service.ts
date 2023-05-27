import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from './entities/travel.entity';

@Injectable()
export class TravelService {

  constructor(
    @InjectRepository(Travel)
    private readonly travelRepository: Repository<Travel>,
  ) {}

  async create(createTravelDto: CreateTravelDto) {
    const verify_travel = await this.preloadTravelByCountryPlace(createTravelDto.country, createTravelDto.place)

    if (!verify_travel) {
      throw new HttpException('Country and Place already exists', HttpStatus.FORBIDDEN);
    }

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

  private async preloadTravelByCountryPlace(country: string, place: string): Promise<Boolean> {
    const travel = await this.travelRepository.findOne({ where: { country, place } });

    if (travel) {
      return false;
    }

    return true;
  }
}
