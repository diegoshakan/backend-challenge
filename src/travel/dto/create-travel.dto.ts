import { IsDate, IsString, IsUrl } from "class-validator";

export class CreateTravelDto {
    @IsString()
    country: string;

    @IsString()
    place: string;

    @IsDate()
    goal: Date;

    @IsUrl()
    url: string;
}
