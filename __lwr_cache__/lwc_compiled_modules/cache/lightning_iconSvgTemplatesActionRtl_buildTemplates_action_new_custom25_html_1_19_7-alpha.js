import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom25.css";

import _implicitScopedStylesheets from "./new_custom25.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 78c-6-30-30-54-61-58-22-3-42 4-57 16-5 4-4 10 2 14 37 19 68 47 92 81 3 5 10 5 14 0 10-15 14-33 10-53zM137 50c5-2 6-10 2-14a71 71 0 00-57-16c-30 4-55 28-61 58-3 19 1 38 10 52 3 5 10 5 14 0 24-32 55-60 92-80zm123 18A216 216 0 0086 412l-33 33a32 32 0 000 46c6 6 14 10 22 10s16-3 22-10l33-33c37 26 82 42 130 42s93-16 128-42l33 33c7 6 15 10 23 10s16-3 22-10c13-13 13-33 0-46l-33-33A216 216 0 00260 68zM108 284a152 152 0 11304 0 152 152 0 01-304 0zm176-10v-62c0-14-10-24-24-24s-24 10-24 24v72c0 6 2 13 7 17l56 56c5 5 11 7 17 7s12-2 17-7c10-10 10-25 0-34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2vupctepgte";
freezeTemplate(tmpl);
