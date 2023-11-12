import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./labels.css";

import _implicitScopedStylesheets from "./labels.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M420 264l-95-94a34 34 0 00-25-11l-240-2a40 40 0 00-40 38l-1 190a39 39 0 0038 37l239 2a30 30 0 0024-10l97-96a40 40 0 001-55zm40 24a40 40 0 000-55l-93-95a33 33 0 00-24-11l-243-2-8 1a40 40 0 0137-30l243 2c9 0 18 4 24 11l94 95a40 40 0 010 55"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7b8rst84kfc";
freezeTemplate(tmpl);
