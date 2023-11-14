import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria.css";

import _implicitScopedStylesheets from "./filter_criteria.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 104h188a17 17 0 0018-17V52a52 52 0 00-52-52H198a52 52 0 00-52 52v35a19 19 0 0017 17zM86 43a8 8 0 018 9v35a69 69 0 0069 69h189a69 69 0 0068-69V52a8 8 0 019-9h17a52 52 0 0152 52v373a52 52 0 01-52 52H68a52 52 0 01-51-52V95a52 52 0 0151-52h17zm270 200H164a8 8 0 00-7 12l85 99a20 20 0 014 11v62a8 8 0 007 7h13a7 7 0 006-7v-62a14 14 0 015-11l85-99a7 7 0 00-6-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2vbdnho6fgp";
freezeTemplate(tmpl);
