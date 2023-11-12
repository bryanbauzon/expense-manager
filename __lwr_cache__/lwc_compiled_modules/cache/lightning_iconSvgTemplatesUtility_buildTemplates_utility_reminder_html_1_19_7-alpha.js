import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reminder.css";

import _implicitScopedStylesheets from "./reminder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M503 75a75 75 0 00-62-59 78 78 0 00-58 16 8 8 0 002 14 285 285 0 0194 82 8 8 0 0014 0 69 69 0 0010-53zM135 47a9 9 0 002-14 70 70 0 00-58-16 72 72 0 00-62 58 74 74 0 0011 53 8 8 0 0014 0 260 260 0 0193-81zm125 18A220 220 0 0040 285a216 216 0 0043 130l-33 33a32 32 0 000 46 31 31 0 0046 0l33-33a221 221 0 00131 43 216 216 0 00130-43l33 33a33 33 0 0024 10 33 33 0 0023-56l-33-33a216 216 0 0043-130A220 220 0 00260 65zM105 284a155 155 0 11155 155 155 155 0 01-155-155zm180-9v-64a24 24 0 10-48 0v73a20 20 0 007 17l57 57a24 24 0 0034 0 23 23 0 000-34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3at0rajg666";
freezeTemplate(tmpl);
