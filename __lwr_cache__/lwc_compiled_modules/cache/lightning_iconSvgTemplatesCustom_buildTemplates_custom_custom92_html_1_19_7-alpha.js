import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom92.css";

import _implicitScopedStylesheets from "./custom92.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M737 564L509 460c-6-3-12-3-18 0L263 564c-13 6-17 21-9 33 24 34 39 78 45 98 2 8 9 13 16 15 79 19 144 64 171 85a23 23 0 0027 0c27-21 93-66 171-85 8-2 14-7 16-15 6-21 21-65 45-98 9-11 5-27-8-33zm-297 56c-17 0-30-18-30-40s13-40 30-40 30 18 30 40-13 40-30 40zm120 0c-17 0-30-18-30-40s13-40 30-40 30 18 30 40-13 40-30 40zM344 461l122-56a79 79 0 0169 1l121 56c7 3 14-2 14-9v-45c0-5-2-10-6-14-8-9-24-24-54-24v-59c0-7-4-14-10-17-11-6-30-15-60-20v-54c0-11-9-20-20-20h-40c-11 0-20 9-20 20v54c-30 5-49 14-60 20-6 3-10 10-10 17v59c-30 0-46 15-54 23-4 4-6 9-6 14v45c0 7 7 12 14 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-pg809vfpdr";
freezeTemplate(tmpl);
