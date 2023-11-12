import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expand_all.css";

import _implicitScopedStylesheets from "./expand_all.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 95c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h410c8 0 15-7 15-15zm0 300c0-8-7-15-15-15H55c-8 0-15 7-15 15v30c0 8 7 15 15 15h410c8 0 15-7 15-15zM300 290h45c8 0 15-7 15-15v-30c0-8-7-15-15-15h-45c-6 0-10-4-10-10v-45c0-8-7-15-15-15h-30c-8 0-15 7-15 15v45c0 6-4 10-10 10h-45c-8 0-15 7-15 15v30c0 8 7 15 15 15h45c6 0 10 4 10 10v45c0 8 7 15 15 15h30c8 0 15-7 15-15v-45c0-6 4-10 10-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763ec9m3342";
freezeTemplate(tmpl);
