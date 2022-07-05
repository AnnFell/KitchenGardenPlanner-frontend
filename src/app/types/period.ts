import {PlantEventTypes} from "./PlantEventTypes";

export type Period = {
  id: number;
  type: PlantEventTypes;
  startMonth: number;
  endMonth: number;
}
