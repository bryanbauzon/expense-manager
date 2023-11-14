import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reply_text.css";

import _implicitScopedStylesheets from "./reply_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M487 509a10 10 0 00-5 17l55 56a15 15 0 010 21l-21 21a15 15 0 01-21 0L360 489a15 15 0 010-21l135-135a15 15 0 0121 0l21 22a15 15 0 010 21l-56 56c-6 6 5 17 5 17a272 272 0 01258 203 260 260 0 0053-156c-1-155-135-277-301-277S196 342 196 493a276 276 0 0036 133 26 26 0 013 21l-39 107a13 13 0 0016 16l108-41a23 23 0 0121 3 324 324 0 00157 40 316 316 0 00195-69 217 217 0 00-206-194z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o664g1hc6d";
freezeTemplate(tmpl);
