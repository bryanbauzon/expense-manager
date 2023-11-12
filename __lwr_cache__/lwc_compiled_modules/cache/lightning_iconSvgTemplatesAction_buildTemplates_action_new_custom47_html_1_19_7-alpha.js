import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom47.css";

import _implicitScopedStylesheets from "./new_custom47.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M366 436H89c-27 0-49 22-49 48v1c0 8 7 15 15 15h344c8 0 15-7 15-15v-1c1-26-21-48-48-48zm109-253L345 65l21-31c3-5 1-11-5-12-40-8-64 19-64 19C46 41 87 312 99 375c2 7 8 13 16 13h221c7 0 11-8 7-13-45-54-68-114-83-152-2-6 4-14 11-10 59 30 84-2 124 22 20 12 44 9 60-7l22-22c4-6 4-16-2-23zm-166-27c-14 0-24-10-24-24s11-24 24-24 24 10 24 24-10 24-24 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-63iq9o536lc";
freezeTemplate(tmpl);
