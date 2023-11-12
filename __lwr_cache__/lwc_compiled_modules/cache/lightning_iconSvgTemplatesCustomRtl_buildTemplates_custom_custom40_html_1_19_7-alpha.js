import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom40.css";

import _implicitScopedStylesheets from "./custom40.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 28H26a6 6 0 00-6 6v34a6 6 0 006 6h48a6 6 0 006-6V34a6 6 0 00-6-6zm0 6v6H26v-6h48zM26 68V50h48v18H26zm17.1-13c-1.4 0-2.6.7-3.3 1.8-.1.2-.4.2-.5 0A3.9 3.9 0 0036 55c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.4 0 2.6-.7 3.3-1.8.1-.2.4-.2.5 0a3.9 3.9 0 003.3 1.8h.1c2.1 0 3.9-1.7 3.9-3.9v-.2a4 4 0 00-4-3.9zM66 56H54a2 2 0 00-2 2v2c0 1.1.9 2 2 2h12a2 2 0 002-2v-2a2 2 0 00-2-2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-3ulsi4333q0";
freezeTemplate(tmpl);
