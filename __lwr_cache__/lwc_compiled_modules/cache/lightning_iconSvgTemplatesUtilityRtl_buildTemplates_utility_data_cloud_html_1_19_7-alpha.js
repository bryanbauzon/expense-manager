import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_cloud.css";

import _implicitScopedStylesheets from "./data_cloud.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 93a80 80 0 00-34-56 101 101 0 00-74-15c-4 0-24 6-38 17-29 20-42 49-51 73a400 400 0 00-17 90 156 156 0 00-52 0 309 309 0 00-78-152 100 100 0 00-66-30 71 71 0 00-67 51 90 90 0 0053 110c30 12 34 16 40 22l5 5c10 9 18 23 24 36a190 190 0 00-65 133c0 77 67 123 180 123s180-46 180-123c0-47-26-99-68-134l4-8 45-75a80 80 0 0020 0c20-2 34-9 44-20a63 63 0 0015-46zm-40 24c-5 5-12 8-23 9a46 46 0 01-20-2 17 17 0 00-20 7 1901 1901 0 00-52 88l-2 4a179 179 0 00-23-13v-5c2-15 8-61 16-82 10-28 22-45 39-58a77 77 0 0124-10c14-3 37 0 47 8 12 10 20 20 20 32a30 30 0 01-6 21zM260 465c-34 0-146-6-146-88 0-65 65-143 146-143s146 78 146 143c0 82-112 88-146 88zM145 183a134 134 0 00-4-4c-10-10-18-16-51-30-16-6-45-30-33-67 4-13 15-28 34-28 13 0 27 7 42 20a279 279 0 0167 137c-9 3-18 8-26 13a149 149 0 00-30-41zm38 206c10 0 17-12 17-26s-8-26-17-26-17 12-17 26 7 26 17 26zm154 0c10 0 17-12 17-26s-8-26-17-26-17 13-17 26 8 26 17 26zm-77-9c-12 0-22 8-22 17s10 17 22 17 21-7 21-17-10-17-21-17z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-7dr452348k3";
freezeTemplate(tmpl);
