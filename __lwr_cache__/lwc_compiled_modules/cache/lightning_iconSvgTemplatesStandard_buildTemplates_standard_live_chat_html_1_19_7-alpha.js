import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./live_chat.css";

import _implicitScopedStylesheets from "./live_chat.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M495 219c-167 0-300 123-300 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l109-41c6-3 14-1 21 3 45 25 99 40 157 40 164-2 298-123 298-276-1-155-135-277-301-277zM345 545c-28 0-50-23-50-50 0-28 23-50 50-50 28 0 50 23 50 50s-23 50-50 50zm150 0c-28 0-50-23-50-50 0-28 23-50 50-50 28 0 50 23 50 50s-22 50-50 50zm151 0c-28 0-50-23-50-50 0-28 23-50 50-50s50 23 50 50-23 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qftte0kbio";
freezeTemplate(tmpl);
