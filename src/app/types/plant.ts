import {Stock} from "./stock";
import {DateYMDString} from "./dateString";

export type Plant = {
  id: Number;
  type: Stock;
  date: DateYMDString;
  location: string;
  harvested: false;
}
