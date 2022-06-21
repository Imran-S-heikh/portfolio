export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "caret-up"
  | "chevron-right-ii"
  | "chevron-right"
  | "close"
  | "done"
  | "figma"
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
  | "CaretUp"
  | "ChevronRightIi"
  | "ChevronRight"
  | "Close"
  | "Done"
  | "Figma"
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
  CaretUp = "caret-up",
  ChevronRightIi = "chevron-right-ii",
  ChevronRight = "chevron-right",
  Close = "close",
  Done = "done",
  Figma = "figma",
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
  [Icons.CaretUp]: "61701",
  [Icons.ChevronRightIi]: "61702",
  [Icons.ChevronRight]: "61703",
  [Icons.Close]: "61704",
  [Icons.Done]: "61705",
  [Icons.Figma]: "61706",
  [Icons.FileIi]: "61707",
  [Icons.File]: "61708",
  [Icons.Folder]: "61709",
  [Icons.Game]: "61710",
  [Icons.Github]: "61711",
  [Icons.Info]: "61712",
  [Icons.Linkedin]: "61713",
  [Icons.Mail]: "61714",
  [Icons.Phone]: "61715",
  [Icons.Telegram]: "61716",
  [Icons.Terminal]: "61717",
  [Icons.Twitter]: "61718",
  [Icons.Whatsapp]: "61719",
};
