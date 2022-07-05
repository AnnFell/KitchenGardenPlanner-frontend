import {Stock} from "./stock";
import {DateYMDString} from "./dateString";

export type Plant = {
  id: Number;
  type: Pick<Stock, 'id' | 'name' | 'periods'>;
  date: DateYMDString;
  location: string;
  harvested: false;
}
