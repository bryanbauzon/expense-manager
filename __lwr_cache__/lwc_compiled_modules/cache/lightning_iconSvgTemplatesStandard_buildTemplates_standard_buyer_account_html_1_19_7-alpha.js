import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_account.css";

import _implicitScopedStylesheets from "./buyer_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M618 655h133c4 0 8-3 8-7l24-86c2-6-3-11-8-11H570l-3-13c-2-6-7-10-13-10h-22c-7 0-14 6-14 13-1 8 6 14 13 14h13l12 40 30 103c2 6 7 10 13 10h156c7 0 14-6 14-13 1-8-6-14-13-14H618c-6 0-11-4-13-9v-1c-2-8 4-16 13-16zm-7-456H221c-22 0-25 23-25 25v495c1 13 9 33 44 33h283c32 0 30-21 28-29l-1-3-3-11-2-6-31-103c-2-7-10-10-10-10-5-3-10-6-13-10a55 55 0 01-14-40c2-28 26-50 54-50h22c15 0 28 6 38 16l1 1c2 2 6 5 12 5h14c13 0 14-14 15-18l1-105V230c1-24-16-31-23-31zM324 671c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-119c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-117c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-118c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm127 354c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-119c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-117c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-118c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm127 118c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23zm0-118c0 13-10 23-23 23h-23c-13 0-23-10-23-23v-23c0-13 10-23 23-23h23c13 0 23 10 23 23z"${3}/><circle cx="621" cy="758" r="22"${3}/><circle cx="729" cy="758" r="22"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1mhacvetgpm";
freezeTemplate(tmpl);
