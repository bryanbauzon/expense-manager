import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom86.css";

import _implicitScopedStylesheets from "./new_custom86.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 100h32c5 0 8-3 8-8V68h112v24c0 5 3 8 8 8h32c5 0 8-3 8-8V68c0-26-22-48-48-48H204c-26 0-48 22-48 48v24c0 5 3 8 8 8zm288 48H68c-26 0-48 22-48 48v256c0 26 22 48 48 48h384c26 0 48-22 48-48V196c0-26-22-48-48-48zM260 436a112 112 0 110-224 112 112 0 010 224zm48-136h-24v-24c0-9-7-16-16-16h-16c-9 0-16 7-16 16v24h-24c-9 0-16 7-16 16v16c0 9 7 16 16 16h24v24c0 9 7 16 16 16h16c9 0 16-7 16-16v-24h24c9 0 16-7 16-16v-16c0-9-7-16-16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61pneq655sp";
freezeTemplate(tmpl);
