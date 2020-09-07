export const SET_DISPLAY_PAGE = "SET_DISPLAY_PAGE"
export const HOME="HOME";
export const ABOUT="ABOUT";

export function changeDisplay(display) {
    return {
        type:SET_DISPLAY_PAGE,
        display:display
    }
}