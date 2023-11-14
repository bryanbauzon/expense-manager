import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_asset.css";

import _implicitScopedStylesheets from "./maintenance_asset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M465 305c2 5 6 8 11 8h275c13 0 27 3 39 8 5 3 11-1 11-8 1-28-21-50-49-51H450c-3 0-6 2-6 5l1 4z"${3}/><path d="M751 364H467c-18 0-34-10-44-25l-44-76c-8-16-25-26-43-26h-85c-28 0-50 22-50 50v459c-1 28 21 50 49 51h501c28 0 50-22 50-50V415c1-28-21-50-49-51zM620 697a29 29 0 01-41 1l-1-1-99-99c-6 3-13 4-20 5-42 5-80-26-85-68v-8c0-7 1-15 3-22 1-2 3-4 6-3l1 1 43 43c3 3 9 3 12 0l30-30c3-3 3-9 0-12l-43-43c-2-2-1-5 1-6l1-1a76 76 0 0198 74v8l-5 20 99 99c13 11 15 29 4 42z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25h5db9789g";
freezeTemplate(tmpl);
