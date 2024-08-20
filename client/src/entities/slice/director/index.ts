import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import {
  IAddDirectorPort,
  IDirectorDto,
  IEditDirectorPort,
} from "@/shared/interfaces/director";
import { AxiosResponse } from "axios";

export const GetDirectorsSlice = async (): Promise<
  AxiosResponse<IDirectorDto[]>
> => {
  return instance.get(EApi.DIRECTORS);
};

export const AddDirectorSlice = async (
  data: IAddDirectorPort
): Promise<AxiosResponse<IAddDirectorPort>> => {
  return instance.post(EApi.ADD_DIRECTOR, data);
};

export const EditDirectorSlice = async (
  data: IEditDirectorPort
): Promise<AxiosResponse<void>> => {
  return instance.put(EApi.EDIT_DIRECTOR + `/${data.id}`, data);
};


export const DeleteDirectorSlice = async (id: number): Promise<AxiosResponse<void>> => {
  return instance.delete(EApi.DELETE_DIRECTOR + `/${id}`)
}