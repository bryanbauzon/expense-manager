import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom29.css";

import _implicitScopedStylesheets from "./new_custom29.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M453 84h-15c-10 0-17 8-17 18v318l1 3 20 28c2 2 4 2 6 0l20-28c2-1 2-1 2-3V102c0-10-7-18-17-18zM325 20H98c-26 0-48 22-48 48v384c0 26 22 48 48 48h226c27 0 48-22 48-48V68c1-26-21-48-47-48zM212 484c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-11 24-24 24zm113-80c0 9-7 16-16 16H115c-9 0-16-7-16-16V100c0-9 7-16 16-16h194c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2monu2903m0";
freezeTemplate(tmpl);
