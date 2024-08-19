export interface orderPostDto {
  furniture_id: number;
  shops_id: number[];
}

export interface orderPutDto {
  id: number;
  shops_id: number[];
  furniture_id: number;
}
