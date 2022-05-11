export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "chevron-right-ii"
  | "chevron-right"
  | "close"
  | "file-ii"
  | "file"
  | "folder"
  | "game"
  | "github"
  | "info"
  | "linkedin"
  | "mail"
  | "phone"
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
  | "FileIi"
  | "File"
  | "Folder"
  | "Game"
  | "Github"
  | "Info"
  | "Linkedin"
  | "Mail"
  | "Phone"
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
  FileIi = "file-ii",
  File = "file",
  Folder = "folder",
  Game = "game",
  Github = "github",
  Info = "info",
  Linkedin = "linkedin",
  Mail = "mail",
  Phone = "phone",
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
  [Icons.FileIi]: "61704",
  [Icons.File]: "61705",
  [Icons.Folder]: "61706",
  [Icons.Game]: "61707",
  [Icons.Github]: "61708",
  [Icons.Info]: "61709",
  [Icons.Linkedin]: "61710",
  [Icons.Mail]: "61711",
  [Icons.Phone]: "61712",
  [Icons.Telegram]: "61713",
  [Icons.Terminal]: "61714",
  [Icons.Twitter]: "61715",
  [Icons.Whatsapp]: "61716",
};
