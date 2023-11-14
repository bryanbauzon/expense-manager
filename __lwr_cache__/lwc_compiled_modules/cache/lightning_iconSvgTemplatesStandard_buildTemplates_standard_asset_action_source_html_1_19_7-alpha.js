import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_action_source.css";

import _implicitScopedStylesheets from "./asset_action_source.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M521 679a153 153 0 0129-89H371a8 8 0 01-9-9v-9a8 8 0 019-9h202a154 154 0 0129-21l-1-4V411a8 8 0 019-9h17a8 8 0 019 9v119a143 143 0 0196 5V268a24 24 0 00-24-24H293a24 24 0 00-24 24v415a24 24 0 0024 24h53v25a24 24 0 0024 24h28a24 24 0 0024-24v-25h103a86 86 0 01-4-28zm-55-139a8 8 0 01-9 9h-17a8 8 0 01-9-9V411a8 8 0 019-9h17a8 8 0 019 9zm77 0a8 8 0 01-9 9h-34a8 8 0 01-9-9V411a8 8 0 019-9h34a8 8 0 019 9zm33 0a9 9 0 01-18 0V411a9 9 0 1118 0zM363 368a8 8 0 019-9h257a8 8 0 019 9v9a8 8 0 01-9 9H371a8 8 0 01-9-9v-9zm0 43a8 8 0 019-9h34a8 8 0 019 9v129a8 8 0 01-9 9h-34a8 8 0 01-9-9zm313 148a121 121 0 00-121 120 120 120 0 10121-120zm80 125l-53 54a7 7 0 01-10 0 110 110 0 01-10-11 7 7 0 010-10l16-17a5 5 0 00-3-8h-97a8 8 0 01-7-7v-15a7 7 0 017-7h97a5 5 0 003-8l-16-15a7 7 0 010-10l10-10a7 7 0 0110 0l53 55a6 6 0 010 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1f3rvtd84b5";
freezeTemplate(tmpl);
