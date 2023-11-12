import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom21.css";

import _implicitScopedStylesheets from "./new_custom21.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M321 429c-2-6-8-9-14-9h-93c-6 0-12 3-14 9l-22 59c-2 6 2 11 7 11h150c6 0 10-6 7-11zM452 20H68c-26 0-48 21-48 48v256c0 26 22 48 48 48h384c26 0 48-22 48-48V68c0-27-22-48-48-48zM260 356c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-10 24-24 24zm192-80c0 9-7 16-16 16H84c-9 0-16-7-16-16V84c0-9 7-16 16-16h352c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-28cfggi7c9j";
freezeTemplate(tmpl);
