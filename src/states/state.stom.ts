import { atom } from "recoil";

console.log(window.innerWidth)
export const NavbarOpenState = atom({
    key: "NAVBAR_OPEN_STATE",
    default: window.innerWidth > 1024
})