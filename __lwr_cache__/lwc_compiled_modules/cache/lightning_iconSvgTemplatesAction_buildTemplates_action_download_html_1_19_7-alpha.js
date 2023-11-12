import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./download.css";

import _implicitScopedStylesheets from "./download.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 310h-30c-8 0-15 7-15 15v100c0 8-7 15-15 15H95c-8 0-15-7-15-15V325c0-8-7-15-15-15H35c-8 0-15 7-15 15v135c0 22 18 40 40 40h400c22 0 40-18 40-40V325c0-8-7-15-15-15zm-235 66c6 6 15 6 21 0l135-135c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-56 56c-6 6-17 2-17-7V35c-1-8-9-15-16-15h-30c-8 0-15 7-15 15v212c0 9-11 13-17 7l-56-56c-6-6-15-6-21 0l-21 22c-6 6-6 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-lu27alm54e";
freezeTemplate(tmpl);
