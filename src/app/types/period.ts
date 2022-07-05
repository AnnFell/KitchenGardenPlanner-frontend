import {PlantEventTypes} from "./PlantEventTypes";

export type Period = {
  id: number| undefined;
  type: PlantEventTypes;
  startMonth: number;
  endMonth: number;
}
