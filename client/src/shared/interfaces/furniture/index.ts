export interface IFurnitureDto {
  id: number;
  name: string;
  file: string;
}

export interface IAddFurniturePort {
  name: string;
  file: FileList;
}

export interface IEditFurniturePort extends IAddFurniturePort {
  id: number;
}
