import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_record_choice.css";

import _implicitScopedStylesheets from "./dynamic_record_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M435 714v-4c-90-28-155-111-155-210 0-121 99-220 220-220a220.6 220.6 0 01212 279l9 6c4 0 7-1 11-1 20 0 40 6 56 15 7-25 11-52 11-80 0-165-135-300-300-300S199 334 199 499c0 159 124 289 280 299-26-18-44-49-44-84zm132-179c19 0 37 5 53 13l12-3c5-14 8-29 8-45 0-77-62-139-139-139s-139 62-139 139c0 62 40 114 96 133 6-56 52-98 109-98zm49 73a56.3 56.3 0 0189 11c8-3 18-6 28-6 37 0 68 31 68 67 0 37-31 67-68 67-4 0-9 0-13-1-8 15-25 25-43 25-8 0-15-2-22-5-9 20-29 34-52 34-25 0-45-15-53-36-3 0-7 1-11 1-29 0-53-23-53-52 0-19 10-36 26-45-3-7-5-15-5-24 0-33 28-60 61-60 19 1 37 10 48 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1u7obhoi5dg";
freezeTemplate(tmpl);
