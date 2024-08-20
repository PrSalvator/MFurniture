export interface IDirectorDto {
  id: number;
  lastname: string;
  firstname: string;
  patronymic?: string;
}

export type IAddDirectorPort = Omit<IDirectorDto, "id">;

export interface IEditDirectorPort extends IAddDirectorPort {
  id: number;
}
