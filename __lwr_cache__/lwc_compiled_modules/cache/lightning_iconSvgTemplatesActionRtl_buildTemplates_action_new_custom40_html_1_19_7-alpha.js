import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom40.css";

import _implicitScopedStylesheets from "./new_custom40.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 80H68c-26 0-48 21-48 47v266c0 26 22 47 48 47h384c26 0 48-21 48-47V127c0-26-22-47-48-47zm0 47v47H68v-47h384zM68 393V252h384v141H68zm137-102c-11 0-21 5-26 14-1 2-3 2-4 0-6-9-15-14-26-14-18 0-32 14-32 31s14 31 32 31c11 0 21-5 26-14 1-2 3-2 4 0 6 9 15 14 26 14h1c17 0 31-13 31-31v-2c-1-15-15-29-32-29zm183 8h-96c-9 0-16 7-16 16v15c0 9 7 16 16 16h96c9 0 16-7 16-16v-16c0-8-7-15-16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6p4qs2iqpn5";
freezeTemplate(tmpl);
