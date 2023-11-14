import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./travel_mode.css";

import _implicitScopedStylesheets from "./travel_mode.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.8 72.1C54 60 62.3 50 72.5 50a22.5 22.5 0 01-18.7 22.1M27.5 50c10.3 0 18.5 9.9 18.7 22.1A22.5 22.5 0 0127.5 50M50 27.5a22.4 22.4 0 0121.1 15H29a22.4 22.4 0 0121.1-15m0-7.5a30 30 0 1030 30 30 30 0 00-30-30"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-4oqhr8tufoh";
freezeTemplate(tmpl);
