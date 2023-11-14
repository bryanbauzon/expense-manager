import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./global_constant.css";

import _implicitScopedStylesheets from "./global_constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M286 282c26-20 54-23 73-23l71-1 21-1 26-1h21a238.5 238.5 0 10-477 0 240 240 0 00190 234 67 67 0 0120-57c-25-25-46-82-50-152h55v64c2-5 3-10 6-14a330 330 0 0134-42l6-6zm163-48h-63a342 342 0 00-34-143 190 190 0 0197 143zM284 77c27 23 51 82 55 157h-55zm-48 0v157h-55c4-75 28-134 55-157zM71 282h63c2 57 15 106 34 143a190 190 0 01-97-143zm62-48H71c8-61 45-114 97-143a380 380 0 00-35 143zm113 185l8-7 8-10a48 48 0 01-26-30v57l10-10zm250-120c-2-2-3-2-5-2-20-1-41 1-60 1l-71 1a80 80 0 00-56 20c-10 10-21 23-29 35l-2 5c0 5 4 8 8 8 5 0 6-3 8-6l8-10c11-10 26-16 41-14-13 35-30 75-56 103-10 11-29 23-33 39-4 17 13 21 25 16 16-6 25-23 34-37a1284 1284 0 0049-109c5-11 6-11 18-11h31l-33 77c-8 20-22 49-12 70s38 14 53 2c16-11 25-29 34-45 2-3 3-6 2-10-2-3-4-5-7-5-7 0-9 9-11 14-4 9-14 17-24 15-23-3-2-45 2-57l14-34 9-20c4-8 4-8 14-9 8 0 31 4 38-1 6-4 9-18 12-28 2-3 2-5-1-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4tn93dr8i0a";
freezeTemplate(tmpl);
