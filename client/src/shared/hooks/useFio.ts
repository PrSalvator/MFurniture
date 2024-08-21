import { IDirectorDto } from "@/shared/interfaces/director";

export const useFio = () => {
  const getFio = (user: IDirectorDto): string => {
    console.log(user)
    return `${user.lastname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic![0] + ".": ""}`;
  };

  return { getFio };
};
