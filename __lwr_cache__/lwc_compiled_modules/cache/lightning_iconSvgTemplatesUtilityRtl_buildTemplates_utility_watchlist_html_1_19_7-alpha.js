import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./watchlist.css";

import _implicitScopedStylesheets from "./watchlist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M429 70h2l3 1a25 25 0 0114 10l2 3 42 74c15 27 2 34-11 42s-25 11-39-8l-1-2-7-13-64 250a30 30 0 01-53 11l-1-1-107-165-55 120a30 30 0 01-27 18H36c-4 0-15-4-15-14a40 40 0 00-1-13v-18a15 15 0 0114-16h74l70-152a30 30 0 0139-15 30 30 0 0113 11l99 153 46-181-9 5c-19 13-27 7-39-8l-2-3c-8-13-11-26 1-35l10-7 74-43a31 31 0 0119-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4502lai2mnh";
freezeTemplate(tmpl);
