import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom41.css";

import _implicitScopedStylesheets from "./new_custom41.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 110H65c-25 0-45 20-45 44v212c0 24 20 44 45 44h390c25 0 45-20 45-44V154c0-24-20-44-45-44zM118 366a50 50 0 00-52-51V205c29 0 52-23 52-51h285a50 50 0 0052 51v110a51 51 0 00-52 51z"${3}/><ellipse cx="260" cy="256" rx="75" ry="73"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ndr5kh8e4s";
freezeTemplate(tmpl);
