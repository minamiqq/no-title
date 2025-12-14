import type {
  IBaseWidgetSettings,
  IFillSettings,
} from "@infomaximum/widget-sdk";

export interface WidgetSettings extends IBaseWidgetSettings {}

export const fillSettings: IFillSettings<WidgetSettings> = (settings) => {};  
