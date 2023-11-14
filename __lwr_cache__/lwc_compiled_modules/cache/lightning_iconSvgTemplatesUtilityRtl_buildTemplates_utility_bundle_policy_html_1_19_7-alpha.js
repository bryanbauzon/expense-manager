import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_policy.css";

import _implicitScopedStylesheets from "./bundle_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M375 226a20 20 0 00-28 0l-43 44a21 21 0 000 30l97 99a20 20 0 0028 0l43-45a21 21 0 000-29l-97-100zm-57 164a24 24 0 00-34 0l-62 63a24 24 0 000 33 24 24 0 0034 0l62-62a24 24 0 000-34zm159 62h-98a24 24 0 100 48h98a24 24 0 0023-24 24 24 0 00-23-24zM136 20H80a61 61 0 00-60 62v28a61 61 0 0060 62h56a61 61 0 0060-62V82a61 61 0 00-60-62zm-15 104H95a28 28 0 01-27-28 28 28 0 0127-28h26a28 28 0 0127 28 28 28 0 01-27 28zm183 48h56a61 61 0 0060-62V82a61 61 0 00-60-62h-56a61 61 0 00-60 62v28a61 61 0 0060 62zm15-104h26a28 28 0 0127 28 28 28 0 01-27 28h-26a28 28 0 01-27-28 28 28 0 0127-28zM136 220H80a61 61 0 00-60 62v28a61 61 0 0060 62h56a61 61 0 0060-62v-28a61 61 0 00-60-62zm-15 104H95a28 28 0 010-56h26a28 28 0 110 56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-41o5786pcmi";
freezeTemplate(tmpl);
