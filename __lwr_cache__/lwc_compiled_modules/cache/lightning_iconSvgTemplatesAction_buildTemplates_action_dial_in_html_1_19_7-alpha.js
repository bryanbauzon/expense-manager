import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dial_in.css";

import _implicitScopedStylesheets from "./dial_in.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="10" cy="10" r="6"${3}/><circle cx="10" cy="26" r="6"${3}/><circle cx="26" cy="10" r="6"${3}/><circle cx="42" cy="10" r="6"${3}/><circle cx="26" cy="26" r="6"${3}/><circle cx="42" cy="26" r="6"${3}/><circle cx="10" cy="42" r="6"${3}/><circle cx="26" cy="42" r="6"${3}/><circle cx="42" cy="42" r="6"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-k7s5sgvshd";
freezeTemplate(tmpl);
