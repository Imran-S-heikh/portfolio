export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "caret-up"
  | "chevron-right-ii"
  | "chevron-right"
  | "close"
  | "cv"
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
  | "menu"
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
  | "Cv"
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
  | "Menu"
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
  Cv = "cv",
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
  Menu = "menu",
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
  [Icons.Cv]: "61705",
  [Icons.Done]: "61706",
  [Icons.Figma]: "61707",
  [Icons.FileIi]: "61708",
  [Icons.File]: "61709",
  [Icons.Folder]: "61710",
  [Icons.Game]: "61711",
  [Icons.Github]: "61712",
  [Icons.Info]: "61713",
  [Icons.Linkedin]: "61714",
  [Icons.Mail]: "61715",
  [Icons.Menu]: "61716",
  [Icons.Phone]: "61717",
  [Icons.Telegram]: "61718",
  [Icons.Terminal]: "61719",
  [Icons.Twitter]: "61720",
  [Icons.Whatsapp]: "61721",
};
