import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom26.css";

import _implicitScopedStylesheets from "./custom26.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 200a60 60 0 00-40 105v455c0 22 18 40 40 40s40-18 40-40V305a60 60 0 00-40-105zm525 108c-157 82-264-59-412-5-8 3-13 10-13 19v258c0 13 13 23 26 19 142-43 249 91 404 6 6-3 10-10 10-17V317c0-8-8-13-15-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44p9s9jd6o4";
freezeTemplate(tmpl);
