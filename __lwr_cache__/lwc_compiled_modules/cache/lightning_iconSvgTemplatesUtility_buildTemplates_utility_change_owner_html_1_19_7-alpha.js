import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./change_owner.css";

import _implicitScopedStylesheets from "./change_owner.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M273 376c-30-12-35-23-35-35s8-23 18-32a82 82 0 0026-64c0-47-29-85-83-85s-83 38-83 85c0 25 8 49 26 64 10 9 18 20 18 32s-5 23-35 35c-44 18-86 38-87 76 2 26 22 48 47 48h230c25 0 45-22 45-47-1-38-43-59-87-77zm172-186c0-74-61-135-135-135V20l-68 55c-3 3-2 8 1 11l67 54v-35c47 0 85 38 85 85h-35l55 68c3 3 8 3 11 0l54-68z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-272o8rch5d8";
freezeTemplate(tmpl);
