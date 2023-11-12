import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./detach.css";

import _implicitScopedStylesheets from "./detach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M166 338a14 14 0 0019 0l92-92a19 19 0 0126 0 20 20 0 010 28L189 385a65 65 0 01-90 0h-1a65 65 0 010-92L298 93a65 65 0 0190 0l2 2a65 65 0 010 90l-1 2a13 13 0 00-2 16 142 142 0 0113 32 10 10 0 0015 5c8-7 14-15 14-15a120 120 0 000-170h-2a120 120 0 00-170 0L57 254a120 120 0 000 170l2 2a120 120 0 00169 0l114-113a75 75 0 10-108-104l-90 90a14 14 0 000 20l22 19zm287 78l42-42a9 9 0 000-13l-25-26a9 9 0 00-13 0l-41 45-40-40a9 9 0 00-13 0l-25 25a10 10 0 000 13l40 40-40 38a9 9 0 000 13l27 26a9 9 0 0013 0l38-39 41 42a9 9 0 0013 0l26-26a9 9 0 000-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hrrmb03ril";
freezeTemplate(tmpl);
