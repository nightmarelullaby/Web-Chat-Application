import { atom } from "recoil";

export const buttonState = atom({
    key: 'button', // unique ID (with respect to other atoms/selectors)
    default: 'actived', // default value (aka initial value)
});