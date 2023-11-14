import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_focus_presenter.css";

import _implicitScopedStylesheets from "./meet_focus_presenter.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M476 280H323a29 29 0 00-29 28v115a29 29 0 0029 29h153a29 29 0 0029-30V309a29 29 0 00-29-29zm10 143a10 10 0 01-10 10H323a10 10 0 01-10-10v-96a10 10 0 0110-10h153a10 10 0 0110 10zM275 167c0-53-31-99-87-99s-86 46-86 100a97 97 0 0029 70 57 57 0 0119 37c0 14-5 26-36 40-45 20-88 42-89 85a50 50 0 0047 52h200a57 57 0 01-7-30V317l-2-1c-30-14-36-27-36-40a53 53 0 0119-37 98 98 0 0029-70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-21kg4huol96";
freezeTemplate(tmpl);
