import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./location_permit.css";

import _implicitScopedStylesheets from "./location_permit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M392 114l-92-91a11 11 0 00-7-3 10 10 0 00-10 10v73a27 27 0 0027 27h72a10 10 0 0010-10c2-2 2-3-1-6zm3 73a14 14 0 00-15-15h-97a41 41 0 01-40-40V33a14 14 0 00-16-13H90a41 41 0 00-42 41v332a41 41 0 0042 42h141c11 0 14-8 13-20a140 140 0 0130-103c34-40 91-43 100-43s23 0 21-13zM97 107l34-5a1 1 0 002-1l15-31a4 4 0 016 0l16 31 1 2 35 4a3 3 0 011 4l-26 26v3l6 34c0 2-1 5-4 3l-30-16h-3l-30 16c-1 2-4 0-4-3l4-34v-3l-26-24a10 10 0 013-6zm125 232a14 14 0 01-14 14h-90a14 14 0 01-14-14v-14a14 14 0 0114-14h90a14 14 0 0114 14zm76-84a14 14 0 01-15 14H119a14 14 0 01-14-14v-14a14 14 0 0114-15h167a14 14 0 0114 15v14zm75 115a20 20 0 1020 20 21 21 0 00-20-20zm0-67a98 98 0 1099 99 100 100 0 00-99-99zm3 157a4 4 0 01-6 0c-10-8-44-37-44-70a47 47 0 0194 0c-1 33-34 62-44 70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2j4lcka6uqc";
freezeTemplate(tmpl);
