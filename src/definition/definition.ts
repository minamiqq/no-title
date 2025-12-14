import type {
  IDefinition,
  IFillSettings,
  IGroupSettings,
  IPanelDescriptionCreator,
} from "@infomaximum/widget-sdk";
import { fillSettings, type WidgetSettings } from "./settings";
import { createPanelDescription } from "./panel";

export class NoTitleDefinition implements IDefinition<WidgetSettings, IGroupSettings> {
  public createPanelDescription: IPanelDescriptionCreator<
    WidgetSettings,
    IGroupSettings
  > = createPanelDescription;

  public fillSettings: IFillSettings<WidgetSettings> = fillSettings;

  public getLocalMigrateVersions(): string[] {
    return [];
  }
}
