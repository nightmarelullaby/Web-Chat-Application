import { atom } from "recoil";

export const chatBodyState = atom({
    key: 'chatBody', // unique ID (with respect to other atoms/selectors)
    default: {
        type:"dm",
        chatTitle:"default",
        chatSubtitle:"default"}, // default value (aka initial value)
});