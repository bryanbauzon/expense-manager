import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./people.css";

import _implicitScopedStylesheets from "./people.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 712v28c0 33-27 60-60 60H260c-33 0-60-27-60-60v-28c0-73 85-117 165-152l8-4c6-3 13-3 19 1a196 196 0 00216 1c6-4 13-4 19-1l8 4c80 34 165 78 165 151z"${3}/><ellipse cx="500" cy="365" rx="149" ry="165"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-41l5a11a0t8";
freezeTemplate(tmpl);
