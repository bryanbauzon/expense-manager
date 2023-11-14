import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./org_chart.css";

import _implicitScopedStylesheets from "./org_chart.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M467 192H360a12 12 0 00-12 12v37h-74l-1-147a15 15 0 00-15-14H157V40a12 12 0 00-12-12H37a12 12 0 00-12 12v108a12 12 0 0012 12h108a12 12 0 0012-12v-38h86l1 146a15 15 0 0015 15h89v40a12 12 0 0012 12h107a12 12 0 0012-12V204a12 12 0 00-12-12z"${3}/><rect width="132" height="132" x="348" y="28" rx="12"${3}/><rect width="132" height="132" x="348" y="355" rx="12"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-135jjcvmeg6";
freezeTemplate(tmpl);
