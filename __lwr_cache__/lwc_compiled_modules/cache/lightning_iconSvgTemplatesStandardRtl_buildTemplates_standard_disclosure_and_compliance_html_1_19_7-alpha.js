import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./disclosure_and_compliance.css";

import _implicitScopedStylesheets from "./disclosure_and_compliance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M721 238h-20c-7 0-10 3-10 10v41c0 45-36 82-81 82H390c-45 0-81-37-81-82v-41c0-7-3-10-10-10h-20c-34 0-60 28-60 61v440c0 33 26 62 60 62h442c34 0 60-29 60-62V299c0-33-27-61-60-61zM500 489c0-6 4-10 9-10h128c5 0 9 4 9 10l1 19c0 6-5 10-10 10H509c-5 0-9-4-9-10zm-144 8c-3-3-3-7 0-10l10-10c3-3 8-3 11 0l26 25 65-64c3-3 7-3 10 0l10 11c3 3 3 8 0 10l-75 74c-3 3-7 5-11 5s-7-2-10-5zm291 186c0 5-5 9-10 9H402c-6 0-10-4-10-9v-20c0-5 4-10 10-10h235c5 0 10 5 10 10zm0-88c0 6-5 10-10 10H402c-6 0-10-4-10-10v-19c0-6 4-10 10-10h235c5 0 10 4 10 10zM390 323h221c12 0 21-9 21-20v-41c0-33-27-61-60-61H431c-33 0-60 28-60 61v41c-1 11 8 20 19 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75uao72kobf";
freezeTemplate(tmpl);
