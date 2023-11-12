import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_note.css";

import _implicitScopedStylesheets from "./new_note.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M100 400v21c0 26 22 48 48 48h256c26 0 48-16 48-48h16c18 0 32-14 32-32 0-17-14-32-32-32h-16v-65h16c18 0 32-14 32-32s-14-32-32-32h-16v-65h16c18 0 32-14 32-32s-14-33-32-33h-16c0-24-22-48-48-48H148c-26 0-48 22-48 48v83c0 4 3 11 6 14l108 110c5 7 14 19 14 39v25c0 33-26 52-50 52h-26c-14 0-27-5-37-15l-9-9c-4-3-6-2-6 3zm88-245c0-9 7-16 16-16h160c9 0 16 7 16 16v16c0 9-7 16-16 16H204c-9 0-16-7-16-16zm72 194c0-9 7-16 16-16h88c9 0 16 7 16 16v16c0 9-7 16-16 16h-88c-9 0-16-7-16-16zm-24-97c0-9 7-16 16-16h112c9 0 16 7 16 16v16c0 9-7 16-16 16H252c-9 0-16-7-16-16zm-210-4l123 124 3 1h26c2 0 2-2 2-4v-27l-1-2L57 214c-6-6-16-6-22 0l-10 10c-7 7-7 17 1 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6i2hjeiba93";
freezeTemplate(tmpl);
