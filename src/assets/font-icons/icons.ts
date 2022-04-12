export type IconsId =
  | "github";

export type IconsKey =
  | "Github";

export enum Icons {
  Github = "github",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Github]: "61697",
};
