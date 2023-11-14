import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./iot_context.css";

import _implicitScopedStylesheets from "./iot_context.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M730 435c-32 0-60 22-67 52h-49c-8-56-56-100-115-100s-107 43-115 100h-49a69.6 69.6 0 00-137 18c0 38 31 70 70 70 32 0 60-22 67-52h49c8 50 47 88 97 96v49a69.6 69.6 0 0018 137c39 0 70-31 70-70 0-32-22-60-52-67v-49c50-7 89-46 97-96h49a69.6 69.6 0 00137-18c0-39-31-70-70-70zM535 734c0 19-16 35-35 35s-35-16-35-35 16-35 35-35 35 16 35 35zM333 360c-8 8-8 20 0 28s20 8 28 0c74-74 194-74 268 0 4 4 9 6 14 6s10-2 14-6c8-8 8-20 0-28-89-90-235-90-324 0zm-51-36c118-117 308-117 426 0 4 4 9 6 14 6s10-2 14-6c8-8 8-20 0-28a341 341 0 00-482 0c-8 8-8 20 0 28s20 8 28 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6385t5lrdqo";
freezeTemplate(tmpl);
