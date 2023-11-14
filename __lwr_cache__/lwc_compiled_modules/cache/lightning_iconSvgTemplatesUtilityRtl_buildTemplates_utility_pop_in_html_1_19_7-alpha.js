import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pop_in.css";

import _implicitScopedStylesheets from "./pop_in.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 313h191c8 0 16-5 16-13v-30c0-8-7-17-16-17h-79c-9 0-14-10-7-16L495 67c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0L283 195c-6 6-16 2-16-7v-79c0-8-8-17-16-17h-29c-8 0-15 9-15 17v190c1 9 5 13 13 14zm150 40h-40c-6 0-10 4-10 10v62c0 8-7 15-15 15H95c-8 0-15-7-15-15V215c0-8 7-15 14-15h63c6 0 10-4 10-10v-40c0-6-4-10-10-10H60a40 40 0 00-40 40v280a40 40 0 0040 40h280a40 40 0 0040-40v-97c0-6-4-10-10-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1m7jigu7t13";
freezeTemplate(tmpl);
