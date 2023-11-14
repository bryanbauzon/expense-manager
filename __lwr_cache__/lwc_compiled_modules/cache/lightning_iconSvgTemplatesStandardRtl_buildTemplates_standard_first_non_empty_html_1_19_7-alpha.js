import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./first_non_empty.css";

import _implicitScopedStylesheets from "./first_non_empty.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M559 493l227-228c8-8 8-20 0-29l-27-29c-8-8-20-8-29 0L501 436c-5 5-14 5-19 0L254 206c-8-8-20-8-29 0l-29 29c-8 8-8 20 0 29l228 228c5 5 5 14 0 19L196 740c-8 8-8 20 0 29l29 29c8 8 20 8 29 0l228-228c5-5 14-5 19 0l226 226c8 8 20 8 29 0l29-29c8-8 8-20 0-29L559 512c-6-6-6-14 0-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ts1ngvcet0";
freezeTemplate(tmpl);
