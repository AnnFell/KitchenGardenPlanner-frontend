import {StockItem} from "./stock-item";

export type Plant = {
  id: Number;
  type: StockItem;
  date: Date;
  location: string;
  harvested: false;
}
