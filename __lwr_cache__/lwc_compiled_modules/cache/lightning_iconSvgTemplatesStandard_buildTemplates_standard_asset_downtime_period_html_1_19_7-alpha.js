import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_downtime_period.css";

import _implicitScopedStylesheets from "./asset_downtime_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M504 678a156 156 0 0121-88H371a8 8 0 01-9-9v-9a8 8 0 019-9h173a154 154 0 0119-17 8 8 0 01-4-7V411a9 9 0 1118 0v127a115 115 0 0125-12V411a8 8 0 019-9h17a8 8 0 019 9v107l7-1a159 159 0 0189 21V268a24 24 0 00-24-24H293a24 24 0 00-24 24v415a24 24 0 0024 24h53v25a24 24 0 0024 24h28a24 24 0 0024-24v-25h87a93 93 0 01-5-29zm-38-138a8 8 0 01-9 9h-17a8 8 0 01-9-9V411a8 8 0 019-9h17a8 8 0 019 9zm77 0a8 8 0 01-9 9h-34a8 8 0 01-9-9V411a8 8 0 019-9h34a8 8 0 019 9zM363 368a8 8 0 019-9h257a8 8 0 019 9v9a8 8 0 01-9 9H371a8 8 0 01-9-9v-9zm0 43a8 8 0 019-9h34a8 8 0 019 9v129a8 8 0 01-9 9h-34a8 8 0 01-9-9zm284 198h12a7 7 0 016 6v54l-2 5-35 35a8 8 0 01-9 0l-7-9a8 8 0 010-9l29-29v-47a6 6 0 016-6zm141 54h-18v-4a116 116 0 10-117 124 115 115 0 0086-36c2-2 4-4 2-6l-10-12a6 6 0 00-9 0 92 92 0 01-77 29 96 96 0 01-81-80 91 91 0 01181-19v4h-18a7 7 0 00-6 6l1 4 31 38a7 7 0 0010 0l31-38a8 8 0 000-9 15 15 0 00-6-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-dpt1s1jpd7";
freezeTemplate(tmpl);
