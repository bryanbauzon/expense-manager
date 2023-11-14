import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./investment_account.css";

import _implicitScopedStylesheets from "./investment_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 330v340c0 33 27 60 60 60h480c33 0 60-27 60-60V330c0-33-27-60-60-60H260c-33 0-60 27-60 60zm111 210V401c0-11 8-21 19-21h140c9 0 13 12 7 18l-42 38 65 75 64-64c11-12 30-12 42 0l112 153c4 4 4 10 0 14l-5 5c-4 4-10 4-14 0L585 519l-64 73a29 29 0 01-42 0l-106-91-46 46c-7 6-17 2-16-7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-sieida0dbu";
freezeTemplate(tmpl);
