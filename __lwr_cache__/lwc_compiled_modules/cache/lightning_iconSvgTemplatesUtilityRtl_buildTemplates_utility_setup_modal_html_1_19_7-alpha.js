import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 20H35c-8 0-15 7-15 15v324c0 8 7 15 15 15h450c8 0 15-7 15-15V35c0-8-7-15-15-15zM320 440c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20m0-20c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40z"${3}/><circle cx="200" cy="460" r="40"${3}/><circle cx="80" cy="460" r="40"${3}/><circle cx="440" cy="460" r="40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nnnmkrd4kt";
freezeTemplate(tmpl);
