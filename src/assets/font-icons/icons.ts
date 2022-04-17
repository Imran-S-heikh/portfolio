export type IconsId =
  | "chevron-right-ii"
  | "chevron-right"
  | "folder"
  | "github"
  | "linkedin"
  | "telegram"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "ChevronRightIi"
  | "ChevronRight"
  | "Folder"
  | "Github"
  | "Linkedin"
  | "Telegram"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  ChevronRightIi = "chevron-right-ii",
  ChevronRight = "chevron-right",
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
  [Icons.Folder]: "61699",
  [Icons.Github]: "61700",
  [Icons.Linkedin]: "61701",
  [Icons.Telegram]: "61702",
  [Icons.Twitter]: "61703",
  [Icons.Whatsapp]: "61704",
};
