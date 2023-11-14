import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layers.css";

import _implicitScopedStylesheets from "./layers.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36 20c0-2-2-4-4-4H6c-2 0-4 2-4 4v26c0 2 2 4 4 4h26c2 0 4-2 4-4V20zm7-18H17c-4 0-7 3-7 7v3h26c2 0 4 2 4 4v26h3c4 0 7-3 7-7V9c0-4-3-7-7-7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7c2tel442gc";
freezeTemplate(tmpl);
