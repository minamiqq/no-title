import {
  type IPanelDescriptionCreator,
  type IGroupSettings,
} from "@infomaximum/widget-sdk";
import type { WidgetSettings } from "./settings";

export const createPanelDescription: IPanelDescriptionCreator<
  WidgetSettings,
  IGroupSettings
> = () => ({});
