import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom45.css";

import _implicitScopedStylesheets from "./new_custom45.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M132 208h255v105H132z"${3}/><path d="M500 195v-40c0-25-20-45-45-45H65c-25 0-45 20-45 45v40c0 5 3 11 8 13 18 11 30 30 30 52s-12 41-30 52c-5 2-8 7-8 12v41c0 25 20 45 45 45h390c25 0 45-20 45-45v-40c0-5-3-11-8-13-18-11-30-30-30-52s12-41 30-52c5-3 8-7 8-13zm-82 163H102c-8 0-15-7-15-15V178c0-8 7-15 15-15h315c8 0 15 7 15 15v165c0 8-6 15-14 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5865r5bqt6i";
freezeTemplate(tmpl);
