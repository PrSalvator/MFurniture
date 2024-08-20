import { IDirectorDto } from "../director";

export interface IShortShopDto {
  id: number;
  number: string;
  director_id: number;
}

export interface IShopDto {
  id: number;
  number: string;
  director: IDirectorDto;
}

export interface IAddShopPort {
  number: string;
  director_id: number;
}
