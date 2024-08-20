export enum EApi {
  ORDERS = "order",
  ADD_ORDER = `${EApi.ORDERS}/add`,
  SHOPS = "shop",
  FURNITURES = "furniture",
  EDIT_ORDER = `${EApi.ORDERS}`,
  DELETE_ORDER = `${EApi.ORDERS}`,
  ADD_FURNITURE = `${EApi.FURNITURES}/add`,
  EDIT_FURNITURE = `${EApi.FURNITURES}`,
  DELETE_FURNITURE = `${EApi.FURNITURES}`,
  DIRECTORS = `director`,
  ADD_DIRECTOR = `${EApi.DIRECTORS}/add`,
  EDIT_DIRECTOR= `${EApi.DIRECTORS}`,
  DELETE_DIRECTOR = `${EApi.DIRECTORS}`,
  ADD_SHOP = `${EApi.SHOPS}/add`
}
