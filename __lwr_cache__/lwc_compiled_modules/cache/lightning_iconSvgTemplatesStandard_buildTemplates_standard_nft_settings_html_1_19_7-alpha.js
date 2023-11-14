import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nft_settings.css";

import _implicitScopedStylesheets from "./nft_settings.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 605a104 104 0 010-208 104 104 0 010 208zm-66-104c0-37 29-66 66-66s66 29 66 66-29 66-66 66-66-29-66-66zm105-350a80 80 0 00-80 0L217 291a80 80 0 00-40 69v280c0 29 16 55 40 69l243 140c25 15 55 15 80 0l243-140c24-14 39-40 39-69V360c0-29-15-55-39-69zm124 380l35 30c11 9 15 26 6 37l-15 25c-5 9-15 15-27 15l-7-1-4-1-41-16c-17 16-36 27-58 35l-8 45c-2 15-16 26-31 26h-30c-15 0-27-11-30-26l-8-45c-20-7-38-17-56-32l-43 16-11 2c-11 0-21-5-27-15l-15-26c-7-14-4-30 8-40l34-29-3-33c0-10 1-22 3-32l-34-29a31 31 0 01-8-40l15-27c5-9 16-15 27-15l7 2 4 1 44 16c17-15 36-26 57-33l7-43c2-15 16-24 31-24h30c15 0 28 9 31 24l7 44c20 7 39 17 56 32l43-15c4-2 7-3 11-3 11 0 21 5 27 15l15 26c8 14 4 31-7 40l-35 30a157 157 0 010 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-sr74m3eg07";
freezeTemplate(tmpl);
