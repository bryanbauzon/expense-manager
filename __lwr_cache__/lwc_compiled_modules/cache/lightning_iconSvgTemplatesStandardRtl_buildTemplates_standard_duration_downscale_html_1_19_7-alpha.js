import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./duration_downscale.css";

import _implicitScopedStylesheets from "./duration_downscale.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M398 200H266c-36 0-66 27-66 60v100c0 33 30 60 66 60h132c36 0 66-27 66-60V260c0-33-29-60-66-60zm-55 160h-22a53 53 0 01-55-50 53 53 0 0155-50h22a53 53 0 0155 50 53 53 0 01-55 50zm253 60h132c37 0 67-27 67-60V260c0-33-30-60-67-60H596c-36 0-66 27-66 60v100c0 33 30 60 66 60zm55-160h22a53 53 0 0155 50 53 53 0 01-55 50h-22a53 53 0 01-55-50 53 53 0 0155-50zM398 480H266c-36 0-66 27-66 60v100c0 33 30 60 66 60h132c36 0 66-27 66-60V540c0-33-29-60-66-60zm-55 160h-22a50 50 0 010-100h22a50 50 0 010 100zm455 36a12 12 0 00-3-2l-23-19a18 18 0 00-23 0l-39 32c-7 5-18 2-18-6V494a16 16 0 00-16-14h-33a17 17 0 00-17 14v187c0 8-11 12-18 6l-38-32a18 18 0 00-23 0l-23 19a12 12 0 00-3 16 13 13 0 003 2l124 104a18 18 0 0023 0l124-103a12 12 0 003-17z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-66bebki0mqg";
freezeTemplate(tmpl);
