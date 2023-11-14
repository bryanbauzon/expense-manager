import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_service_campaign_item.css";

import _implicitScopedStylesheets from "./product_service_campaign_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 196a16 16 0 0116 14v226a48 48 0 01-46 48H100a48 48 0 01-48-46V212a16 16 0 0114-16h386zm-124 67h-1l-92 100-41-40a12 12 0 00-16-1h-1l-17 17a10 10 0 000 14v1l59 56a25 25 0 0017 7 23 23 0 0017-7l49-52 4-4 5-5 50-53a13 13 0 001-15l-18-16a12 12 0 00-16-1zM452 36a48 48 0 0148 48v48a16 16 0 01-16 16H36a16 16 0 01-16-16V84a48 48 0 0148-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qlt9e07qc1";
freezeTemplate(tmpl);
