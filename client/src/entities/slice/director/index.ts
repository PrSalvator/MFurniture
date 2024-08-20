import { EApi } from "@/shared/enum/api"
import { instance } from "@/shared/instance"
import { IDirectorDto } from "@/shared/interfaces/director";
import { AxiosResponse } from "axios";

export const GetDirectorsSlice = async (): Promise<AxiosResponse<IDirectorDto[]>> => {
    return instance.get(EApi.DIRECTORS);
}