import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M374 319L206 488c-8 6-8 18-1 25l1 1 169 169c6 8 18 8 25 1l1-1 26-27c8-6 8-18 1-25l-1-1-70-70c-5-5-4-14 2-18 2-2 4-3 7-3h266c10-2 18-10 19-20v-38c-1-10-9-18-19-18H367c-8 0-13-6-13-13 0-4 2-7 4-9l70-70c8-6 8-18 1-25l-1-1-27-26c-6-8-18-9-25-2zm208 51v-76c0-10 9-19 19-19h105c10 0 19 9 19 19v412c0 10-9 19-19 19H601c-10 0-19-9-19-19v-74c0-10-9-19-19-19h-37c-10 0-19 9-19 19v118c0 28 22 50 50 50h193c28 0 50-22 50-50V250c0-28-22-50-50-50H557c-28 0-50 22-50 50v120c0 10 9 19 19 19h37c11 0 19-9 19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1sbe2r3kt0d";
freezeTemplate(tmpl);
