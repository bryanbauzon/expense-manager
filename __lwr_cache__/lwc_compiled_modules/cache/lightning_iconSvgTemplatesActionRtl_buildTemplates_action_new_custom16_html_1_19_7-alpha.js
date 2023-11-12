import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom16.css";

import _implicitScopedStylesheets from "./new_custom16.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M433 420h-8V244c0-9-7-16-16-16h-16c-9 0-16 7-16 16v176h-47V244c0-9-7-16-16-16h-16c-9 0-16 7-16 16v176h-47V244c0-9-7-16-16-16h-16c-9 0-16 7-16 16v176h-47V244c0-9-7-16-16-16h-16c-9 0-16 7-16 16v176h-5c-26 0-47 22-47 48v16c0 9 7 16 16 16h409c9 0 16-7 16-16v-16c-1-26-22-48-48-48zm39-285L278 26a30 30 0 00-36 0L48 135c-5 3-8 8-8 14v15c0 9 7 16 16 16h409c9 0 16-7 16-16v-14c-1-6-4-12-9-15zm-212 13c-22 0-39-18-39-40s17-40 39-40 39 18 39 40-17 40-39 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ull4hqt5ph";
freezeTemplate(tmpl);
