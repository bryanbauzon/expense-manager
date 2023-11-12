import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_payment.css";

import _implicitScopedStylesheets from "./contract_payment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M644 321L526 204a11 11 0 00-9-4 12 12 0 00-13 13v94a36 36 0 0036 36h95a12 12 0 0012-13 11 11 0 00-3-9zm-15 75H505a54 54 0 01-54-53V218a18 18 0 00-18-18H255a54 54 0 00-54 54v428a54 54 0 0054 53h137V597a71 71 0 0170-70h185V414a18 18 0 00-18-18zm-223-77l-33 32v3l7 44a4 4 0 01-6 4l-39-21a3 3 0 00-4 0l-39 21a4 4 0 01-6-4l8-44a5 5 0 00-1-3l-32-32c-1-1 0-5 3-6l44-6 3-2 20-40a4 4 0 017 0l20 40 3 2 43 6c3 1 5 5 2 6zm358 243H463a35 35 0 00-35 35v168a35 35 0 0035 35h301a35 35 0 0035-35V597a35 35 0 00-35-35zM503 765a40 40 0 00-39-41h-1v-86a40 40 0 0041-40v-1h219a40 40 0 0040 41h2v86a41 41 0 00-42 40v2z"${3}/><circle cx="613" cy="678" r="58"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4f5g51aurb2";
freezeTemplate(tmpl);
