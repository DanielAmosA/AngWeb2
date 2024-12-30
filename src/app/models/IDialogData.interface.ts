import { TDialogButtons, TType } from "../types/global.types";

export interface IDialogData {
  title: string;
  desc: string;
  dialogButtons: TDialogButtons;
  type: TType;
}
