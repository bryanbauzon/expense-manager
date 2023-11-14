import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex_alt.css";

import _implicitScopedStylesheets from "./apex_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M382 336H236c-5 0-8 4-8 8v16c0 4 3 8 8 8h146c4 0 8-4 8-8v-16c0-4-4-8-8-8zm-125-99l-105-84a7 7 0 00-11 2l-10 13c-2 4 0 9 2 11l75 60c3 2 3 6 0 9l-75 60c-3 2-4 7-1 10l9 15c3 4 8 4 10 1l107-84c4-3 4-10 0-13zM430 90a242 242 0 00-340 0 240 240 0 000 340 240 240 0 00340 0 240 240 0 000-340zM260 440c-99 0-180-81-180-180S161 80 260 80a180 180 0 110 360z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-oc2pqrkhb8";
freezeTemplate(tmpl);
