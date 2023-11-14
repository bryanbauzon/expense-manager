import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record.css";

import _implicitScopedStylesheets from "./record.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 320h220c11 0 20-9 20-20v-40c0-33-27-60-60-60H430c-33 0-60 27-60 60v40c0 11 9 20 20 20zm330-70h-20c-6 0-10 4-10 10v40c0 44-36 80-80 80H390c-44 0-80-36-80-80v-40c0-6-4-10-10-10h-20c-33 0-60 27-60 60v430c0 33 27 60 60 60h440c33 0 60-27 60-60V310c0-33-27-60-60-60zM390 680c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-100c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-100c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm280 200c0 11-9 20-20 20H450c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c11 0 20 9 20 20zm0-100c0 11-9 20-20 20H450c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c11 0 20 9 20 20zm0-100c0 11-9 20-20 20H450c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4d8fcp44gqd";
freezeTemplate(tmpl);
