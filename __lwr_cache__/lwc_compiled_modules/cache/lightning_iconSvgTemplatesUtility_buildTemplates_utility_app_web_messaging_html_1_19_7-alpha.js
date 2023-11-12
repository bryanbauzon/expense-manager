import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app_web_messaging.css";

import _implicitScopedStylesheets from "./app_web_messaging.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M20 261C20 141 127 43 260 43s238 98 240 220c0 122-108 218-238 220-46 0-88-11-126-32a20 20 0 00-16-2l-86 33c-8 1-17-5-13-13l30-85c2-7 2-12 0-17a220 220 0 01-30-106zm115-88c-10 0-16 7-16 16s6 17 16 17h277c10 0 16-7 16-17s-6-16-16-16zm-16 98c0-10 6-16 16-16h212c10 0 16 6 16 16s-6 16-16 16H135c-10 0-16-6-16-16zm16 65c-10 0-16 7-16 17s6 16 16 16h147c10 0 16-7 16-16s-7-17-17-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1012csnqka1";
freezeTemplate(tmpl);
