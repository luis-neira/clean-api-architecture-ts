import Entity from './interfaces/entity.abstract';

interface IOrderProps {
  userId: string;
  productIds: string[];
  date: Date;
  isPayed: boolean;
  meta: any;
}

export default class Order extends Entity<IOrderProps> {
  private constructor(props: IOrderProps, id: string | null) {
    super(props, id);
  }

  public static create(orderData: IOrderProps, id: string | null): Order {
    const {
      userId = '00000000-0000-0000-0000-000000000000',
      productIds = [],
      date = new Date(),
      isPayed = false,
      meta = {}
    } = orderData;

    return new Order({ userId, productIds, date, isPayed, meta }, id);
  }

  get userId(): string {
    return this.props.userId;
  }

  get productIds(): string[] {
    return this.props.productIds;
  }

  get date(): Date {
    return this.props.date;
  }

  get isPayed(): boolean {
    return this.props.isPayed;
  }

  get meta(): any {
    return this.props.meta;
  }
}
