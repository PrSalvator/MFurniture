export enum EApi {
  ORDERS = "order",
  ADD_ORDER = `${EApi.ORDERS}/add`,
  SHOPS = "shop",
  FURNITURES = "furniture",
  EDIT_ORDER = `${EApi.ORDERS}`,
  DELETE_ORDER = `${EApi.ORDERS}`,
}
