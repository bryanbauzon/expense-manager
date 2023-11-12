import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom89.css";

import _implicitScopedStylesheets from "./custom89.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M579 434c-4-5-12-4-15 2-12 17-24 43-24 74v110c0 16-13 30-30 30-16 0-30-13-30-30V278c0-77-67-89-116-70-13 4-25 12-34 22-6 7-13 13-22 16-18 6-49-11-65-21-9-5-21-3-27 5l-12 17c-7 9-4 23 5 29 19 12 49 31 72 35 35 6 67-5 93-29l-1 1c7-6 19-16 27-5 20 30-60 161-60 352v16c0 81 82 151 163 155 86 4 157-65 157-150 0-43 16-71 32-88 4-4 4-10 0-14zm191 96c-8 0-15-3-21-9L589 361a29 29 0 010-42c12-12 31-12 42 0l160 160c12 12 12 31 0 42-6 6-13 9-21 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14mkniaiksb";
freezeTemplate(tmpl);
