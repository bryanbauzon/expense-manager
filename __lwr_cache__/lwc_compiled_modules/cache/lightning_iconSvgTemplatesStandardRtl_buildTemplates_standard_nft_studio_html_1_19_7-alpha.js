import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nft_studio.css";

import _implicitScopedStylesheets from "./nft_studio.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M533 209a66 66 0 00-66 0L265 326a66 66 0 00-34 57v234c0 24 13 45 34 57l202 117c20 12 46 12 66 0l202-117c21-12 34-33 34-57V383c0-24-13-45-33-57L533 209zM323 429h63c6 0 12 6 12 12v220c0 6-5 12-12 12h-43c-17 0-31-14-31-32V441c0-6 5-12 11-12zm118 0h236c6 0 11 6 11 12v200c0 18-14 32-31 32H441c-6 0-12-6-12-12V441c0-6 6-12 12-12zm-98-102h314c17 0 31 14 31 32v27c0 7-5 12-11 12H323c-6 0-11-5-11-12v-27c0-18 14-32 31-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3akrkvg5lsj";
freezeTemplate(tmpl);
