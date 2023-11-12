import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard_ea.css";

import _implicitScopedStylesheets from "./dashboard_ea.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M225 197h200c14 0 25 11 25 25v549c0 14-11 25-25 25H225c-14 0-25-11-25-25V222c0-14 11-25 25-25zm350-1h200c14 0 25 11 25 25v199c0 14-11 25-25 25H575c-14 0-25-11-25-25V221c0-14 11-25 25-25zm0 350h200c14 0 25 11 25 25v199c0 14-11 25-25 25H575c-14 0-25-11-25-25V571c0-13 11-25 25-25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-rcsb73libg";
freezeTemplate(tmpl);
