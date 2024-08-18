import { IFurnitureDto } from "@/shared/interfaces/furniture";
import { IShortShopDto } from "@/shared/interfaces/shop";

export interface IOrderDto {
  id: number;
  shops: IShortShopDto[];
  furniture: IFurnitureDto;
}
