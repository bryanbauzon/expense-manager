import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./checkout.css";

import _implicitScopedStylesheets from "./checkout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M658 517a142 142 0 11-141 141 142 142 0 01141-141zM430 645a50 50 0 11-50 50 50 50 0 0150-50zm280-44l-76 85-34-35a10 10 0 00-14 0l-14 13a9 9 0 000 14l48 47a20 20 0 0014 6 18 18 0 0014-6l90-98a10 10 0 000-13l-14-13a10 10 0 00-14 0zM278 200a30 30 0 0128 21l7 27h442a19 19 0 0118 24l-52 183a18 18 0 01-7 10 198 198 0 00-56-8 200 200 0 00-68 13H417a28 28 0 00-26 37v1a28 28 0 0027 20h89a203 203 0 00-35 57h-97a29 29 0 01-28-21l-91-306h-27a30 30 0 01-29-31 31 31 0 0131-27h47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dc5mmed0e9";
freezeTemplate(tmpl);
