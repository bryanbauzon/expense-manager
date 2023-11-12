import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./call_history.css";

import _implicitScopedStylesheets from "./call_history.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M281 480l-1 20h-60l1-20z"${3}/><path d="M500 220a280 280 0 00-279 260l-1 10h-45c-13 0-20 15-12 24l75 91c6 7 17 7 23 0l75-91c8-10 1-24-12-24h-44v-10a220.2 220.2 0 11438 45 231 231 0 01-196 194c-71 7-138-19-185-70-6-7-14-11-22-1l-24 29c-5 6-1 10 4 15a279 279 0 00483-172 279 279 0 00-278-300zm-28 208c7-9 7-22-1-32l-21-26a26 26 0 00-39-2l-24 24c-5 5-8 12-8 20a222 222 0 00209 209c7 0 15-2 20-8l24-24c11-11 10-29-2-39l-27-21c-9-7-22-8-32-1l-26 19c-3 3-8 2-11-1l-42-38-38-42c-3-3-3-8-1-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2cd80nsi1ej";
freezeTemplate(tmpl);
