import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom62.css";

import _implicitScopedStylesheets from "./new_custom62.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M476 412H44c-13 0-24 10-24 24 0 13 10 24 24 24h432c13 0 24-10 24-24s-10-24-24-24zM52 364h272v-32c0-9 7-16 16-16h80c9 0 16 7 16 16v32h32c9 0 16-7 16-16V76c0-9-7-16-16-16H52c-9 0-16 7-16 16v272c0 9 7 16 16 16zm72-208c0-9 7-16 16-16h232c9 0 16 7 16 16v16c0 9-7 16-16 16H140c-9 0-16-7-16-16v-16zm0 96c0-9 7-16 16-16h152c9 0 16 7 16 16v16c0 9-7 16-16 16H140c-9 0-16-7-16-16v-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-34thkrcm66o";
freezeTemplate(tmpl);
