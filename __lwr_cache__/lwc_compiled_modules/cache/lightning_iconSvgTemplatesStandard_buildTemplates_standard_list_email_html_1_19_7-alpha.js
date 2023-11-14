import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./list_email.css";

import _implicitScopedStylesheets from "./list_email.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M649 349H303c-27 0-48 22-48 48v8c0 4 4 8 8 8h321c27 0 48 22 48 48v230c0 4 4 8 8 8h8c27 0 48-22 48-48V397c1-26-21-48-47-48zm104-103H407c-27 0-48 22-48 48v8c0 4 4 8 8 8h321c27 0 48 22 48 48v230c0 4 4 8 8 8h8c27 0 48-22 48-48V294c1-26-21-48-47-48zM385 642c5 5 12 5 17 0l183-170c3-6 2-17-11-17l-361 1c-10 0-18 9-11 17zm203-104c0-8-10-13-16-7L429 663a52 52 0 01-70 1L217 531c-6-6-16-2-16 7-1-2-1 184-1 184 0 18 15 32 32 32h323c18 0 32-15 32-32V538z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-30iurccksnn";
freezeTemplate(tmpl);
