import { IFurnitureDto } from "@/shared/interfaces/furniture";
import { IShortShopDto } from "@/shared/interfaces/shop";

export interface IOrderDto {
  id: number;
  shops: IShortShopDto[];
  furniture: IFurnitureDto;
}

export interface IOrderAddPort {
  shops_id: number[];
  furniture_id: number;
}

export interface IOrderEditPort extends IOrderAddPort{
  id: number;
}
