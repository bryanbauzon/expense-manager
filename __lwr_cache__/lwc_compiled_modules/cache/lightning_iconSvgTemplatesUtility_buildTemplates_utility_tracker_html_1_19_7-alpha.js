import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tracker.css";

import _implicitScopedStylesheets from "./tracker.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M15.2 28.4V24a11 11 0 00-2-21.8 11 11 0 00-2 21.8v4.4a11 11 0 002 21.8 11 11 0 002-21.8zm-9-15.2a7 7 0 017-7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3-7-7zm24.1-4h17.9a2 2 0 012 2v4a2 2 0 01-2 2H30.3a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm0 26h17.9a2 2 0 012 2v4a2 2 0 01-2 2H30.3a2 2 0 01-2-2v-4c0-1 .9-2 2-2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-7ue1jp0o159";
freezeTemplate(tmpl);
