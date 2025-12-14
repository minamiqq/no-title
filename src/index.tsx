import ReactDOM from "react-dom/client";
import {
  type IWidget,
  type ICustomWidgetProps,
} from "@infomaximum/widget-sdk";
import manifest from "../manifest.json";
import { type WidgetSettings } from "./definition/settings";
import { NoTitleDefinition } from "./definition/definition";

class NoTitleWidgetWidget implements IWidget<WidgetSettings> {
  public static definition = new NoTitleDefinition();

  private root: ReactDOM.Root | null = null;

  public initialize(container: HTMLElement) {
    this.root = ReactDOM.createRoot(container);
  }

  public update(
    container: HTMLElement,
    props: ICustomWidgetProps<WidgetSettings>
  ) {
    this.render(props);
  }

  public mount(
    container: HTMLElement,
    props: ICustomWidgetProps<WidgetSettings>
  ) {
    this.render(props);
  }

  public unmount() {
    this.root?.unmount();
  }

  private render(props: ICustomWidgetProps<WidgetSettings>) {
    this.root?.render(
      <div>No-title</div>
    );
  }
}

window.im.widget.defineWidget(manifest.uuid, NoTitleWidgetWidget, { manifest });
