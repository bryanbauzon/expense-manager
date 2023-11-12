import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_account.css";

import _implicitScopedStylesheets from "./new_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 269c1-17-12-22-17-22H303c-16 0-18 17-18 18v195h215zM376 409c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm0-85c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm83 85c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm0-85c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zM334 179V82c1-17-11-22-16-22H38c-16 0-18 17-18 18v382h215V216s0-20 18-20h65c10 0 16-10 16-17zM111 401c0 9-7 17-17 17H78c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17v17zm0-86c0 9-7 17-17 17H78c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17v17zm0-85c0 9-7 17-17 17H78c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17v17zm0-85c0 9-7 17-17 17H78c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17v17zm91 256c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm0-86c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm0-85c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm0-85c0 9-7 17-17 17h-17c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17zm91 0c0 9-7 17-17 17h-16c-9 0-17-8-17-17v-17c0-9 7-17 17-17h17c9 0 17 8 17 17v17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4idqcn7fdl2";
freezeTemplate(tmpl);
