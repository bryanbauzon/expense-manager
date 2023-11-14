import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./open.css";

import _implicitScopedStylesheets from "./open.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 350v-6 12-6zM460 20H60a40 40 0 00-40 40v360a40 40 0 0040 40h120c6 0 10-4 10-10v-40c0-6-4-10-10-10H95c-8 0-15-7-15-15V135c0-8 7-15 15-15h330c8 0 15 7 15 15v250c0 8-7 15-15 15h-85c-6 0-10 4-10 10v40c0 6 4 10 10 10h120a40 40 0 0040-40V60a40 40 0 00-40-40zm-85 326l21-21c6-6 6-15 0-21L270 178c-6-6-15-6-21 0L124 303c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l46-46c6-6 18-2 18 7v179c0 8 6 15 14 15h30c8 0 16-7 16-15V306c0-9 10-13 17-7l46 47c6 5 16 5 22 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ah8u3mamp9";
freezeTemplate(tmpl);
