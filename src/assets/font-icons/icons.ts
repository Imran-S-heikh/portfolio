export type IconsId =
  | "chevron-right-ii"
  | "chevron-right"
  | "file"
  | "folder"
  | "github"
  | "linkedin"
  | "telegram"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "ChevronRightIi"
  | "ChevronRight"
  | "File"
  | "Folder"
  | "Github"
  | "Linkedin"
  | "Telegram"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  ChevronRightIi = "chevron-right-ii",
  ChevronRight = "chevron-right",
  File = "file",
  Folder = "folder",
  Github = "github",
  Linkedin = "linkedin",
  Telegram = "telegram",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ChevronRightIi]: "61697",
  [Icons.ChevronRight]: "61698",
  [Icons.File]: "61699",
  [Icons.Folder]: "61700",
  [Icons.Github]: "61701",
  [Icons.Linkedin]: "61702",
  [Icons.Telegram]: "61703",
  [Icons.Twitter]: "61704",
  [Icons.Whatsapp]: "61705",
};
