import { EApi } from "@/shared/enum/api"
import { instance } from "@/shared/instance"
import { IAddDirectorPort, IDirectorDto } from "@/shared/interfaces/director";
import { AxiosResponse } from "axios";

export const GetDirectorsSlice = async (): Promise<AxiosResponse<IDirectorDto[]>> => {
    return instance.get(EApi.DIRECTORS);
}

export const AddDirectorSlice = async (data: IAddDirectorPort): Promise<AxiosResponse<IAddDirectorPort>> => {
    return instance.post(EApi.ADD_DIRECTOR, data);
}