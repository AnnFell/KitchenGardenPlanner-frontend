import {Stock} from "./stock";
import {dateToDateYMDString, DateYMDString} from "./dateString";

export type Plant = {
  id: number;
  type: Pick<Stock, 'id' | 'name' | 'periods'>;
  date: DateYMDString;
  location: string;
  harvested: boolean;
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
