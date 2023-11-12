import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gsheet.css";

import _implicitScopedStylesheets from "./gsheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#3ba755" d="M513 0A507 507 0 006 507v5384c0 281 227 508 507 508h4578c280 0 507-227 507-508V2031L3708 0z"${3}/><path fill="#fff" d="M1011 3747v1642h2152V3747zm646 1507h-497v-358h496zm0-501h-497v-358h496zm0-501h-497v-358h496zm1363 1002H1804v-358h1216zm0-501H1804v-358h1216zm0-501H1804v-358h1216z"${3}/><path fill="#22683e" d="M5598 2032v100H4318s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#cdefc4" d="M3708-3v1456c0 166 110 579 610 579h1280z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4atgntt53hb";
freezeTemplate(tmpl);
