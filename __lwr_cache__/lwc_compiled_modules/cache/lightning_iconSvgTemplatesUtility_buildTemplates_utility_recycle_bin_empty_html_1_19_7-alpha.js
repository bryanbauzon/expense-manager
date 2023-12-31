import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recycle_bin_empty.css";

import _implicitScopedStylesheets from "./recycle_bin_empty.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 100H329V60a40 40 0 00-40-40h-60a40 40 0 00-40 40v40H64c-8 0-15 7-15 15v30c0 8 7 15 15 15h390c8 0 15-7 15-15v-30c0-8-6-15-14-15zm-167 0h-59V70c0-6 4-10 10-10h40c6 0 10 4 10 10v30zm127 100H105c-8 0-15 7-15 15v235a50 50 0 0050 50h240a50 50 0 0050-50V215c-1-8-7-15-15-15zM232 449l-50 1c-2 0-21 0-34-20-14-22-3-40 12-66l-14-10c-2-1-2-2-2-4s1-2 3-3l39-10 3-1c2 0 3 0 5 3l1 3 9 40c0 2 0 3-2 4h-5l-13-8c-14 23-16 30-12 36s10 7 10 7l50-1c5 0 10 2 12 6 2 2 2 5 2 7 1 9-6 16-14 16zm36-146l2-4 14-6c-12-24-17-30-24-30-8 0-10 4-11 5l-26 42c-2 4-7 6-12 6l-7-2c-6-4-9-13-4-19l26-42c1-2 11-18 34-18 26 0 35 19 50 46l16-7c2-1 3 0 4 1s2 2 1 4l-14 41-2 2h-3l-41-15c-2-1-3-2-3-4zm105 123c-12 22-34 22-64 22l-1 18c0 2-1 3-2 3s-2 1-4-1l-30-31c-2-2 0-5 0-5l2-2 32-28c2-1 2-2 4-1s2 2 2 4v15c26 0 34-1 38-7 3-6 2-11 1-12l-25-43c-2-4-2-10 0-14l6-6c6-4 15-2 19 6l25 43c0 2 8 18-3 39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6jt5s1c22m0";
freezeTemplate(tmpl);
