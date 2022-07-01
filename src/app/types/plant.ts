import {Stock} from "./stock";

export type Plant = {
  id: Number;
  type: Stock;
  date: Date;
  location: string;
  harvested: false;
}
