import { IsDateString, IsString, IsUrl } from "class-validator";

export class CreateTravelDto {
    @IsString()
    country: string;

    @IsString()
    place: string;

    @IsDateString()
    goal: Date;

    @IsUrl()
    flag_url: string;
}
