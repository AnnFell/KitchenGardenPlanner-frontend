import {Period} from "./period";
import {LightPreference} from "./LightPreference";

export type Stock = {
  id: number;
  name: string;
  latinName: string;
  description: string;
  brand: string;
  perennial: boolean;
  lightPreference: LightPreference;
  available: boolean;
  periods: Period[];
  spaceBetweenRows: number;
  spaceBetweenPlants: number;
}

export const defaultStockVariable: Stock = {
  id: 0,
  name: "",
  latinName: "",
  description: "",
  brand: "",
  perennial: false,
  lightPreference: LightPreference.FULL_SUN,
  available: true,
  periods: [],
  spaceBetweenRows: 0,
  spaceBetweenPlants: 0
}
