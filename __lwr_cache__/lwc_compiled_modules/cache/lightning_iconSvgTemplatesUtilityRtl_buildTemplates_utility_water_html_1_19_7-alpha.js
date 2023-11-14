import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./water.css";

import _implicitScopedStylesheets from "./water.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M309 135a820 820 0 0034 60l17 28c27 41 55 84 53 135-2 80-73 146-152 146-41 0-80-18-110-46a148 148 0 01-41-118c3-43 27-80 50-116l20-28a817 817 0 0032-58l22-49v-2a276 276 0 0016-52l1-5c3-7 13-8 17-2 2 2 2 5 3 7a317 317 0 0016 52 642 642 0 0022 48zm68 220a13 13 0 00-26-1 93 93 0 01-90 87c-8 0-13 6-13 13s5 13 13 13c60 0 114-50 116-112z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5t271f8749q";
freezeTemplate(tmpl);
