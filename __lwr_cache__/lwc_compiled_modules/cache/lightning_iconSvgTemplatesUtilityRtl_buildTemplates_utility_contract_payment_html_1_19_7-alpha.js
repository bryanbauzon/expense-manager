import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_payment.css";

import _implicitScopedStylesheets from "./contract_payment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M375 117l-94-94a9 9 0 00-7-3 10 10 0 00-10 10v76a29 29 0 0028 28h76a10 10 0 0010-10 9 9 0 00-3-7zm-12 60H263a43 43 0 01-42-43V34a14 14 0 00-14-14H64a43 43 0 00-43 43v342a43 43 0 0043 43h110V338a56 56 0 0156-57h148v-90a14 14 0 00-15-14zm-178-62l-26 26-1 2 6 36a3 3 0 01-4 3l-32-17a2 2 0 00-3 0l-31 17a3 3 0 01-5-3l6-36a4 4 0 00-1-2l-26-26c0-1 1-4 3-5l35-5 3-1 15-32a3 3 0 016 0l16 32 2 1 35 5c2 1 4 4 2 5zm286 195H230a28 28 0 00-28 28v134a28 28 0 0028 28h241a28 28 0 0028-28V338a28 28 0 00-28-28zM263 472a32 32 0 00-32-33h-1v-69a32 32 0 0033-31v-2h176a32 32 0 0032 33v69a32 32 0 00-33 32v1z"${3}/><circle cx="351" cy="403" r="47"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1baffubn37v";
freezeTemplate(tmpl);
