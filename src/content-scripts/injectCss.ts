/*
 * This is an example on how to load dynamically css for content scripts.
 * Generally it is not needed as content.css is loaded automagically by
 * Chrome when loading page.
 */
import * as css from './content.css';

export default function vitalyLoadCss() {
  const style = document.createElement('style');
  style.innerHTML = css.default;
  document.body.appendChild(style);
}
