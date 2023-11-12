import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom59.css";

import _implicitScopedStylesheets from "./custom59.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M683 310c10 0 17-8 17-17 0-7-4-14-11-18-13-7-33-41-40-62-2-8-10-13-18-13H388c-8 0-16 5-18 13-6 20-27 55-39 62-6 4-10 10-10 18 0 10 8 17 17 17h345zM320 739c0 34 27 61 60 61h260c33 0 60-27 60-60v-1c0-11-9-19-19-19H339c-10 0-19 9-19 19zm380-99V390c0-11-9-20-20-20H340c-11 0-20 9-20 20v250c0 11 9 20 20 20h340c11 0 20-9 20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8tnulcl9ha";
freezeTemplate(tmpl);
