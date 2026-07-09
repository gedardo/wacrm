import { common } from "./common";
import { nav } from "./nav";
import { auth } from "./auth";
import { dashboard } from "./dashboard";
import { inbox } from "./inbox";
import { contacts } from "./contacts";
import { pipelines } from "./pipelines";
import { automations } from "./automations";
import { broadcasts } from "./broadcasts";
import { flows } from "./flows";
import { agentsNotifications } from "./agents-notifications";
import { settingsAccount } from "./settings-account";
import { settingsConfig } from "./settings-config";

export const es: Record<string, string> = {
  ...common,
  ...nav,
  ...auth,
  ...dashboard,
  ...inbox,
  ...contacts,
  ...pipelines,
  ...automations,
  ...broadcasts,
  ...flows,
  ...agentsNotifications,
  ...settingsAccount,
  ...settingsConfig,
};
