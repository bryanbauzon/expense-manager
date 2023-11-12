import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom28.css";

import _implicitScopedStylesheets from "./new_custom28.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M372 20H148c-26 0-48 22-48 48v384c0 26 22 48 48 48h224c26 0 48-22 48-48V68c0-26-22-48-48-48zM260 484c-14 0-24-10-24-24s10-24 24-24 24 10 24 24-10 24-24 24zm112-80c0 9-7 16-16 16H164c-9 0-16-7-16-16V100c0-9 7-16 16-16h192c9 0 16 7 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nkcndhfm01";
freezeTemplate(tmpl);
