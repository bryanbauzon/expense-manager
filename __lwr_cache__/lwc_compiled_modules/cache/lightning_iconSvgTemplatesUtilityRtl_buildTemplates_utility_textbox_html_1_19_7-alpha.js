import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./textbox.css";

import _implicitScopedStylesheets from "./textbox.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 448V73c0-26 21-47 47-47h375c26 0 47 21 47 47v374c0 26-21 47-47 47H74a48 48 0 01-48-46zM416 88H104c-9 0-16 7-16 16v312c0 9 7 16 16 16h312c9 0 16-7 16-16V104c0-9-7-16-16-16zm-63 281h-31c-9 0-16-7-16-16V167c0-9 7-16 16-16h31c9 0 16 7 16 16v186c0 9-7 16-16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1v6u5mhno2c";
freezeTemplate(tmpl);
