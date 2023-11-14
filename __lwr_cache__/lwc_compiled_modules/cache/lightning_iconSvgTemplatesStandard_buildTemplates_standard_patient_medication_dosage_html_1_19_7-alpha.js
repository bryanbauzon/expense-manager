import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./patient_medication_dosage.css";

import _implicitScopedStylesheets from "./patient_medication_dosage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M737.9 200H262.1a62.2 62.2 0 00-62.1 62.1v475.8a62.2 62.2 0 0062.1 62.1h475.8a62.2 62.2 0 0062.1-62.1V262.1a62.2 62.2 0 00-62.1-62.1zm0 82.8v434.4a20.6 20.6 0 01-20.6 20.7H282.8a20.6 20.6 0 01-20.7-20.6V282.8a20.6 20.6 0 0120.6-20.7h434.5a20.6 20.6 0 0120.7 20.6zM618.7 526.6a72.6 72.6 0 00-64 43.4 4.9 4.9 0 002.5 6.3h1.3L687.6 601a4.9 4.9 0 005.8-3.7 2.1 2.1 0 000-1.1 72.4 72.4 0 00-74.7-69.6zm66.5 94.9h-1.4l-128.9-24.9a5 5 0 00-5.9 4.2 1.3 1.3 0 000 .6 72.4 72.4 0 00138.7 26.4 4.8 4.8 0 00-2.5-6.3zm-30-245a4.8 4.8 0 003.9-5.6v-.9a72.3 72.3 0 00-138.3 28.1 4.8 4.8 0 004.7 4.9h1.2zm-33.1 88.9a72.2 72.2 0 0042.7-64.4 4.8 4.8 0 00-4.6-5h-1.4L530 422.2a4.8 4.8 0 00-3.9 5.6v1a72.3 72.3 0 0096 36.6zm-170.3-81.6a71.95 71.95 0 10-140 33.3l19.4 81.7 140-33.3zM480 501.5l-140 33 20 82.2a71.97 71.97 0 00140-33.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1g7tkm5gssv";
freezeTemplate(tmpl);
