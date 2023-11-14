import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M487 509c-7 2-11 11-5 17l55 56c6 6 6 15 0 21l-21 21c-6 6-15 6-21 0L360 489c-6-6-6-15 0-21l135-135c6-6 15-6 21 0l21 22c6 6 6 15 0 21l-56 56c-6 6 5 17 5 17 128 4 227 88 258 203 33-44 53-98 53-156-1-155-135-277-301-277-167 0-300 123-300 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l108-41c6-3 14-1 21 3a316 316 0 00352-29 217 217 0 00-206-194z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6pp9eidh8fc";
freezeTemplate(tmpl);
