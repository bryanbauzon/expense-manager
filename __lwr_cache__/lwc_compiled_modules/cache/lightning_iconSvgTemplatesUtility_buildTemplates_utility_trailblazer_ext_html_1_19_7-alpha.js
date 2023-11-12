import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailblazer_ext.css";

import _implicitScopedStylesheets from "./trailblazer_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 325a14 14 0 00-14-15H364a14 14 0 00-14 14v16a14 14 0 0014 14h61L315 464a14 14 0 000 20l10 10a15 15 0 0011 5 13 13 0 0010-4l110-110v60a14 14 0 0014 14h15a14 14 0 0015-14zM220 88a103 103 0 0147 90 97 97 0 01-32 74 5 5 0 000 6 273 273 0 0025 13 23 23 0 006 1h54a198 198 0 0165-25h5a30 30 0 000-5v-5c0-27-30-41-61-54-22-9-25-17-25-25a33 33 0 0114-23 56 56 0 0020-45 60 60 0 00-58-63h-5a58 58 0 00-60 54 8 8 0 003 7zm27 300a154 154 0 0128-74 225 225 0 00-50-25c-25-10-30-20-30-30a42 42 0 0117-28 68 68 0 0023-53c0-40-26-74-73-74a70 70 0 00-74 68v6a67 67 0 0024 53 42 42 0 0116 28c0 10-4 20-30 30-39 15-76 33-76 65v10a30 30 0 0031 30h195z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nl3vjibt34";
freezeTemplate(tmpl);
