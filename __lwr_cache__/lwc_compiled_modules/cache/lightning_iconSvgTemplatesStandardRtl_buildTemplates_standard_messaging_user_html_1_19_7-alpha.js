import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./messaging_user.css";

import _implicitScopedStylesheets from "./messaging_user.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 220c166 0 300 125 301 280 0 155-134 280-300 280-58 0-112-15-158-42-5-3-11-4-17-2l-88 31c-16 5-31-9-26-25l28-89c2-5 1-11-2-16-24-41-38-87-38-137 0-155 134-280 300-280zm88 420c19 0 34-21 32-41-1-30-32-50-66-64-23-9-26-18-26-28 0-11 6-20 14-27 14-12 21-30 21-50 0-38-23-70-63-70s-64 32-64 70c0 20 8 38 22 50 8 7 14 16 14 27 0 10-3 19-27 29-33 15-64 33-65 63 0 20 15 41 34 41z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-kvqoiie5ak";
freezeTemplate(tmpl);
