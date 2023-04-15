import { atom } from "recoil";

export const listOfMessages = atom({
    key: 'listmsg', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});