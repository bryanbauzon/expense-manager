import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./spinner.css";

import _implicitScopedStylesheets from "./spinner.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M160 275v-30c0-8-7-15-15-15H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h110c8 0 15-7 15-15zm19 45c-6-6-15-6-21 0l-78 78c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l78-78c6-6 6-15 0-21zm162-120c6 6 15 6 21 0l78-78c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-78 77c-6 6-6 15 0 21zM122 80c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l78 78c6 6 15 6 21 0l21-21c6-6 6-15 0-21zm241 240c-6-6-15-6-21 0l-22 21c-6 6-6 15 0 21l78 78c6 6 15 6 21 0l21-21c6-6 6-15 0-21zm-88 40h-30c-8 0-15 7-15 15v110c0 8 7 15 15 15h30c8 0 15-7 15-15V375c0-8-7-15-15-15zm210-130H375c-8 0-15 7-15 15v30c0 8 7 15 15 15h110c8 0 15-7 15-15v-30c0-8-7-15-15-15zM275 20h-30c-8 0-15 7-15 15v110c0 8 7 15 15 15h30c8 0 15-7 15-15V35c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68shrndo7u0";
freezeTemplate(tmpl);
