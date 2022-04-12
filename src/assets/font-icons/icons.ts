export type IconsId =
  | "github"
  | "linkedin"
  | "telegram"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "Github"
  | "Linkedin"
  | "Telegram"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  Github = "github",
  Linkedin = "linkedin",
  Telegram = "telegram",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Github]: "61697",
  [Icons.Linkedin]: "61698",
  [Icons.Telegram]: "61699",
  [Icons.Twitter]: "61700",
  [Icons.Whatsapp]: "61701",
};
