export type IconsId =
  | "arrow-up"
  | "chevron-right-ii"
  | "chevron-right"
  | "close"
  | "file"
  | "folder"
  | "github"
  | "linkedin"
  | "telegram"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "ArrowUp"
  | "ChevronRightIi"
  | "ChevronRight"
  | "Close"
  | "File"
  | "Folder"
  | "Github"
  | "Linkedin"
  | "Telegram"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  ArrowUp = "arrow-up",
  ChevronRightIi = "chevron-right-ii",
  ChevronRight = "chevron-right",
  Close = "close",
  File = "file",
  Folder = "folder",
  Github = "github",
  Linkedin = "linkedin",
  Telegram = "telegram",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowUp]: "61697",
  [Icons.ChevronRightIi]: "61698",
  [Icons.ChevronRight]: "61699",
  [Icons.Close]: "61700",
  [Icons.File]: "61701",
  [Icons.Folder]: "61702",
  [Icons.Github]: "61703",
  [Icons.Linkedin]: "61704",
  [Icons.Telegram]: "61705",
  [Icons.Twitter]: "61706",
  [Icons.Whatsapp]: "61707",
};
