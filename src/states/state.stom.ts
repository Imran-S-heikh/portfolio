import { atom } from "recoil";

export const NavbarOpenState = atom({
    key: "NAVBAR_OPEN_STATE",
    default: window.innerWidth > 1024
})