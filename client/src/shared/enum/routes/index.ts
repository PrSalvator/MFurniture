export enum ERoutes {
  MAIN = "",
  ALL_DIRECTORS = "/directors",
  ALL_SHOPS = "/shops",
  ALL_FURNITURES = "/furnitures",
  ALL_ORDERS = "/orders",
  ADD_ORDER = `${ERoutes.ALL_ORDERS}/add`,
  EDIT_ORDER = `${ERoutes.ALL_ORDERS}/edit`,
  ADD_FURNITURE = `${ERoutes.ALL_FURNITURES}/add`,
  EDIT_FURNITURE = `${ERoutes.ALL_FURNITURES}/edit`,
}
