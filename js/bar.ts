import {baz} from "./baz";
export default (element: HTMLElement) => {
    element.textContent = `Yay ${baz}!`;
    element.style.backgroundColor = 'red';
}
