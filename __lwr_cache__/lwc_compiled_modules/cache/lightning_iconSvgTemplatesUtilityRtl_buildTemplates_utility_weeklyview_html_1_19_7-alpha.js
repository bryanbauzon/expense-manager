import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./weeklyview.css";

import _implicitScopedStylesheets from "./weeklyview.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 70h-50V50a30 30 0 10-60 0v20H190V50a30 30 0 10-60 0v20H80a40 40 0 00-40 40v25c0 8 7 15 15 15h410c8 0 15-7 15-15v-25a40 40 0 00-40-40zm25 130H55c-8 0-15 7-15 15v245a40 40 0 0040 40h360a40 40 0 0040-40V215c0-8-7-15-15-15zm-137 95l-63 134c-3 7-10 11-18 11-11 0-19-9-19-18l2-8 53-114h-76c-9 0-17-6-17-15 0-8 8-15 17-15h104c10 0 19 8 19 18l-2 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2tnip02h5be";
freezeTemplate(tmpl);
