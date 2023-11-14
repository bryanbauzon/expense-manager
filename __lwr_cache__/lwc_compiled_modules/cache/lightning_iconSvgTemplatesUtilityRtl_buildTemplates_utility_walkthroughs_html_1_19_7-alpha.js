import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./walkthroughs.css";

import _implicitScopedStylesheets from "./walkthroughs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M140 45c0-15 10-25 23-25h314c13 0 23 10 23 25v252c0 14-10 24-23 24h-37V107c0-14-10-24-23-24H140zM43 145c-13 0-23 10-23 25v252c0 14 10 24 23 24h107l27 43c8 12 21 14 32 6l4-5 32-44h112c12 0 22-10 22-24V170c0-14-10-25-22-25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4g6st5u4477";
freezeTemplate(tmpl);
