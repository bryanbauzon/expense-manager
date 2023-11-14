import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order_item.css";

import _implicitScopedStylesheets from "./work_order_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 320h220c11 0 20-9 20-20v-40c0-33-27-60-60-60H430c-33 0-60 27-60 60v40c0 11 9 20 20 20zm330-70h-20c-6 0-10 4-10 10v40c0 44-36 80-80 80H390c-44 0-80-36-80-80v-40c0-6-4-10-10-10h-20c-33 0-60 27-60 60v430c0 33 27 60 60 60h440c33 0 60-27 60-60V310c0-33-27-60-60-60zm-52 240L476 682c-5 5-11 8-18 8s-14-3-19-8L332 575c-5-5-5-11 0-16l21-21c5-5 11-5 16 0l88 88 173-173c5-5 11-5 16 0l21 21c5 5 5 12 1 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ucr754i5ar";
freezeTemplate(tmpl);
