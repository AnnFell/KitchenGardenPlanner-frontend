import {Stock} from "./stock";
import {dateToDateYMDString, DateYMDString} from "./dateString";

export type Plant = {
  id: Number;
  type: Pick<Stock, 'id' | 'name' | 'periods'>;
  date: DateYMDString;
  location: string;
  harvested: false;
}

export const defaultPlantVariable: Plant = {
  id: 0,
  type: {
    id: 0,
    name: "",
    periods: []
  },
  date: dateToDateYMDString(new Date(Date.now())),
  location: "",
  harvested: false
}
