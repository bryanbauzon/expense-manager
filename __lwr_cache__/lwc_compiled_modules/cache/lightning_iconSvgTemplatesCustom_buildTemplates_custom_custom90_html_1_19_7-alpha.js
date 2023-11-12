import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom90.css";

import _implicitScopedStylesheets from "./custom90.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M774 260l-244 36v344c0 6-4 10-10 10h-40c-6 0-10-4-10-10V305l-236 35h-4c-15 0-28-11-30-26-2-16 9-32 25-34l186-28c17-31 50-53 88-53 28 0 52 11 70 29l197-28c16-2 32 9 34 25 2 17-9 32-26 35zM413 629c7-9 9-20 4-31l-80-190c-4-11-15-18-27-18s-23 7-28 18l-80 190c-4 9-3 19 2 28 2 3 41 63 104 63 37 0 73-20 105-60zM310 497l43 103h-86zm408-149a31 31 0 00-56 0l-80 190c-4 9-3 19 2 28 2 3 41 63 104 63 37 0 72-20 105-60 7-9 9-20 4-31zm-28 89l43 103h-86zM500 710c-56 0-113 20-153 54-4 4-7 9-7 15v1c0 11 9 20 20 20h280c11 0 20-9 20-20v-1c0-6-2-11-7-15-40-34-97-54-153-54z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6hqtrenffgv";
freezeTemplate(tmpl);
