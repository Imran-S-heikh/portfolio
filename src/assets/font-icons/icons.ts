export type IconsId =
  | "chevron-right"
  | "github"
  | "linkedin"
  | "telegram"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "ChevronRight"
  | "Github"
  | "Linkedin"
  | "Telegram"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  ChevronRight = "chevron-right",
  Github = "github",
  Linkedin = "linkedin",
  Telegram = "telegram",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ChevronRight]: "61697",
  [Icons.Github]: "61698",
  [Icons.Linkedin]: "61699",
  [Icons.Telegram]: "61700",
  [Icons.Twitter]: "61701",
  [Icons.Whatsapp]: "61702",
};
