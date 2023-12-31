import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom2.css";

import _implicitScopedStylesheets from "./new_custom2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M333 35C309 19 222 4 189 59c-16 26 3 73 18 103 4 7 12 11 20 8a99 99 0 0159-3c7 2 14-2 18-8a130 130 0 0131-35c38-33 22-73-2-89zm-42 316c-10 3-20 5-31 5-10 0-19-2-28-4-7-2-15 2-18 8-6 10-15 23-31 36-40 32-24 73 0 89s112 31 144-24c15-26-2-72-17-102-4-7-12-10-19-8zm170-164c-26-16-73 3-103 18-7 4-11 12-8 20a99 99 0 013 59c-2 7 2 14 8 18a130 130 0 0135 31c32 40 72 24 88 0s32-113-23-146zM169 290c-3-10-5-20-5-31 0-10 2-19 4-28 2-7-2-15-8-18-10-6-23-15-36-31-32-40-73-24-89 0S4 293 59 326c26 15 72-2 102-17 7-4 10-12 8-19z"${3}/><circle cx="260" cy="260" r="48"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3jt5b5s28ut";
freezeTemplate(tmpl);
