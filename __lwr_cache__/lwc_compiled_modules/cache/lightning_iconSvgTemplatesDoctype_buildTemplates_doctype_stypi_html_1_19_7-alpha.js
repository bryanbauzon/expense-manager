import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stypi.css";

import _implicitScopedStylesheets from "./stypi.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M507 1A507 507 0 000 508v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2032L3702 1z"${3}/><path fill="#e4a201" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#f9e3b6" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#2e2204" d="M2940 3480H1177c-87 0-158 71-158 158v1599c0 87 71 158 158 158h1317l604-602V3638c0-87-71-158-158-158z"${3}/><path fill="#fcc003" d="M1374 4355h1368v165H1374zm0-355h1368v164H1374zm0 711h887v164h-887z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-vg1upgvipq";
freezeTemplate(tmpl);
