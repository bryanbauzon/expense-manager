import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_state_period.css";

import _implicitScopedStylesheets from "./asset_state_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M521 679a153 153 0 0129-89H371a8 8 0 01-9-9v-9a8 8 0 019-9h202a154 154 0 0129-21l-1-4V411a8 8 0 019-9h17a8 8 0 019 9v119a143 143 0 0196 5V268a24 24 0 00-24-24H293a24 24 0 00-24 24v415a24 24 0 0024 24h53v25a24 24 0 0024 24h28a24 24 0 0024-24v-25h103a86 86 0 01-4-28zm-55-139a8 8 0 01-9 9h-17a8 8 0 01-9-9V411a8 8 0 019-9h17a8 8 0 019 9zm77 0a8 8 0 01-9 9h-34a8 8 0 01-9-9V411a8 8 0 019-9h34a8 8 0 019 9zm33 0a9 9 0 01-18 0V411a9 9 0 1118 0zM363 368a8 8 0 019-9h257a8 8 0 019 9v9a8 8 0 01-9 9H371a8 8 0 01-9-9v-9zm0 43a8 8 0 019-9h34a8 8 0 019 9v129a8 8 0 01-9 9h-34a8 8 0 01-9-9zm328 270a14 14 0 01-2-6v-48a8 8 0 00-7-8h-15a8 8 0 00-7 8v60a14 14 0 002 6l37 37a7 7 0 0010 0l11-11a8 8 0 000-11zm-16-122a120 120 0 10121 120 121 121 0 00-121-120zm0 210a90 90 0 1190-90 89 89 0 01-90 90z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3a1lrgaff57";
freezeTemplate(tmpl);
