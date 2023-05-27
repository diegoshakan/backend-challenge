import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto';

export class UpdateTravelDto extends PartialType(
    OmitType(CreateTravelDto, ['country', 'url'] as const)
    ) {}
