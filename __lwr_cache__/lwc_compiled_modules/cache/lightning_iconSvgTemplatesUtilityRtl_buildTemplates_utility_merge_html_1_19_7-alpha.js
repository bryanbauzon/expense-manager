import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./merge.css";

import _implicitScopedStylesheets from "./merge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M423 440a230 230 0 01-116-130 240 240 0 01-15-63v-35h108c8 0 14-9 8-18L266 24c-5-6-16-6-20 0L108 194c-5 6 0 18 8 18h109v35c-3 21-8 44-15 63A230 230 0 0194 440c-8 3-11 13-8 20l13 31c4 8 13 11 21 6 60-29 108-75 137-130 30 55 77 101 138 130 8 4 18 3 21-6l13-31c6-7 2-16-6-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7klo5c460rh";
freezeTemplate(tmpl);
