interface IOrderID {
  id: string;
}

export interface IOrderDetails {
  userId: string;
  productIds: string[];
  date: Date;
  isPayed: boolean;
  meta: any;
}

export interface IAddOrderRequestModel extends IOrderDetails {}

export interface IDeleteOrderRequestModel extends IOrderID {}

export interface IGetOrderByIdRequestModel extends IOrderID {}

export interface IUpdateOrCreateOrderRequestModel extends IOrderID {
  orderDetails: IOrderDetails;
}
