export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "chevron-right-ii"
  | "chevron-right"
  | "close"
  | "file"
  | "folder"
  | "game"
  | "github"
  | "info"
  | "linkedin"
  | "telegram"
  | "terminal"
  | "twitter"
  | "whatsapp";

export type IconsKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "ChevronRightIi"
  | "ChevronRight"
  | "Close"
  | "File"
  | "Folder"
  | "Game"
  | "Github"
  | "Info"
  | "Linkedin"
  | "Telegram"
  | "Terminal"
  | "Twitter"
  | "Whatsapp";

export enum Icons {
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  ChevronRightIi = "chevron-right-ii",
  ChevronRight = "chevron-right",
  Close = "close",
  File = "file",
  Folder = "folder",
  Game = "game",
  Github = "github",
  Info = "info",
  Linkedin = "linkedin",
  Telegram = "telegram",
  Terminal = "terminal",
  Twitter = "twitter",
  Whatsapp = "whatsapp",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.ArrowLeft]: "61698",
  [Icons.ArrowRight]: "61699",
  [Icons.ArrowUp]: "61700",
  [Icons.ChevronRightIi]: "61701",
  [Icons.ChevronRight]: "61702",
  [Icons.Close]: "61703",
  [Icons.File]: "61704",
  [Icons.Folder]: "61705",
  [Icons.Game]: "61706",
  [Icons.Github]: "61707",
  [Icons.Info]: "61708",
  [Icons.Linkedin]: "61709",
  [Icons.Telegram]: "61710",
  [Icons.Terminal]: "61711",
  [Icons.Twitter]: "61712",
  [Icons.Whatsapp]: "61713",
};
