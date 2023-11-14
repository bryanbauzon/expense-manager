import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scheduling_workspace.css";

import _implicitScopedStylesheets from "./scheduling_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M588 725h-38c-8 0-13-5-13-13v-25c0-7-5-12-12-12h-50c-8 0-13 5-13 13v25c0 7-5 12-12 12h-38a50 50 0 00-50 50v6a20 20 0 0020 19h237a20 20 0 0019-19v-6a50 50 0 00-50-50zm162-525H250a50 50 0 00-50 50v325a50 50 0 0050 50h500a50 50 0 0050-50V250a50 50 0 00-50-50zM275 531V294a20 20 0 0119-19h75v275h-75a20 20 0 01-19-19zm450 0a20 20 0 01-19 19H444V275h262c10 0 19 9 19 19v236z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-54gincilhcm";
freezeTemplate(tmpl);
