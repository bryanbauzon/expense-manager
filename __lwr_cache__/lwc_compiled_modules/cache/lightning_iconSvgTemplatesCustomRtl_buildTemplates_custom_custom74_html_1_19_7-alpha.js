import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom74.css";

import _implicitScopedStylesheets from "./custom74.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M560 730H460c-11 0-20 9-20 20v30c0 11 9 20 20 20h100c11 0 20-9 20-20v-30c0-11-9-20-20-20zm-50-530c-122 0-220 94-220 210 0 75 41 141 104 178 24 14 40 38 45 65 2 9 10 16 20 16h104c10 0 18-7 20-16 5-27 21-51 45-65 61-37 102-103 102-178 0-116-98-210-220-210zm-68 94c-20 38-31 83-32 119 0 37 7 73 20 108 4 9-5 17-14 13-92-47-86-220 14-254 8-3 16 6 12 14zm77 238c-3 8-15 8-18 0-16-39-20-85-21-127 1-42 5-88 21-127 3-8 15-8 18 0 16 39 20 85 21 127-1 42-5 88-21 127zm81 2c-8 4-17-4-14-13 14-36 20-76 21-114-1-32-12-76-32-113-4-8 4-17 12-14 100 34 106 207 13 254z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-2d55bd45b5n";
freezeTemplate(tmpl);
