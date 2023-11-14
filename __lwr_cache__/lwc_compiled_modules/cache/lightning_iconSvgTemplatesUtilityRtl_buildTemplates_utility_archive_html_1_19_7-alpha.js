import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./archive.css";

import _implicitScopedStylesheets from "./archive.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 23H68a49 49 0 00-48 48v48c0 9 7 16 16 16h448c9 0 16-7 16-16V71c0-26-22-48-48-48zm14 152H55c-9 0-16 7-16 16v264c0 26 22 48 48 48h348c26 0 48-22 48-48V191c-1-9-8-16-17-16zm-138 80H192c-11 0-20-9-20-20s9-20 20-20h136a20 20 0 110 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-36r530aij1i";
freezeTemplate(tmpl);
