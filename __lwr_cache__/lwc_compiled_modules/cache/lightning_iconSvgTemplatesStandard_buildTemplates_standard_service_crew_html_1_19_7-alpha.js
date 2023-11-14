import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_crew.css";

import _implicitScopedStylesheets from "./service_crew.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M601 513h-37v-44c0-59-33-110-81-135v76c0 40-32 72-72 72s-72-32-72-72v-78c-49 26-83 77-83 136v44h-36c-12 0-21 9-21 21s9 21 21 21h381c12 0 21-9 21-21s-9-20-21-20zm-189-74c16 0 29-13 29-29v-92a153 153 0 00-58 0v92c-1 16 12 29 29 29zm-1 334c-89 0-161-79-161-176h40c0 75 54 136 121 136s121-61 121-136h40c-1 97-73 176-161 176zm242-458c11 0 21-9 21-21v-65l-21-2-20 2v65c-1 11 9 21 20 21zm-1 260v-40c43 0 79-40 79-89h40c0 71-53 129-119 129zm128-214h-20v-26c0-41-23-77-57-95v54c0 28-23 50-50 50-28 0-50-23-50-50v-55c-33 17-56 51-58 91 21 21 36 46 46 73h189c12 0 21-9 21-21s-9-21-21-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1b4ui920dfu";
freezeTemplate(tmpl);
