import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_cadence.css";

import _implicitScopedStylesheets from "./sales_cadence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M417 667c7 7 19 7 26 0l153-152c8-7 8-19 2-26l-2-2-153-153c-7-8-19-8-26-2l-2 2-28 28c-8 7-8 19-2 26l2 2 48 48c5 5 5 14 0 19-2 2-6 4-9 4H221c-11 0-21 9-21 20v40c1 11 10 19 21 20h207c7 0 13 6 13 13 0 3-1 7-4 9l-48 48c-8 7-8 19-2 26l2 2zm218-104l-48 48c-8 7-8 19-2 26l2 2 28 28c7 7 19 7 26 0l153-152c8-7 8-19 2-26l-2-2-153-153c-7-8-19-8-26-2l-2 2-28 28c-8 7-8 19-2 26l2 2 48 48 64 63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8crf9ff50f";
freezeTemplate(tmpl);
