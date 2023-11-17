export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "caret-down"
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
  | "CaretDown"
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
  CaretDown = "caret-down",
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
  [Icons.CaretDown]: "61701",
  [Icons.CaretUp]: "61702",
  [Icons.ChevronRightIi]: "61703",
  [Icons.ChevronRight]: "61704",
  [Icons.Close]: "61705",
  [Icons.Cv]: "61706",
  [Icons.Done]: "61707",
  [Icons.Figma]: "61708",
  [Icons.FileIi]: "61709",
  [Icons.File]: "61710",
  [Icons.Folder]: "61711",
  [Icons.Game]: "61712",
  [Icons.Github]: "61713",
  [Icons.Info]: "61714",
  [Icons.Linkedin]: "61715",
  [Icons.Mail]: "61716",
  [Icons.Menu]: "61717",
  [Icons.Phone]: "61718",
  [Icons.Telegram]: "61719",
  [Icons.Terminal]: "61720",
  [Icons.Twitter]: "61721",
  [Icons.Whatsapp]: "61722",
};
