import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_resource.css";

import _implicitScopedStylesheets from "./service_resource.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M718 200H283a81 81 0 00-83 78v444a81 81 0 0082 78h110c11-45 64-72 121-95 42-18 49-33 49-51s-13-35-27-48a113 113 0 01-39-90c0-67 44-126 120-126s120 58 120 126a121 121 0 01-38 90c-14 14-27 30-27 48s5 33 49 51a415 415 0 0177 39 73 73 0 003-22V278c1-42-36-78-82-78zM476 334a29 29 0 01-27 27H308a29 29 0 01-28-27v-28a29 29 0 0128-27h141a29 29 0 0127 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dl3mudv4jm";
freezeTemplate(tmpl);
