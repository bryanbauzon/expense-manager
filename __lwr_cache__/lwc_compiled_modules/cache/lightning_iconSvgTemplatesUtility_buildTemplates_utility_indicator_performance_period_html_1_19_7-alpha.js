import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./indicator_performance_period.css";

import _implicitScopedStylesheets from "./indicator_performance_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 231l-11-17-33 14a246 246 0 00-202-118C134 110 20 221 20 338v17h58l-1-9v-7c0-95 80-173 177-173a178 178 0 01152 84l-112 49a66 66 0 00-104 29 62 62 0 005 48 66 66 0 0087 27 63 63 0 0034-62l105-62a166 166 0 0111 60v7l-1 9h58v-16a203 203 0 00-21-89z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4kv6jggoj38";
freezeTemplate(tmpl);
