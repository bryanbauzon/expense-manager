import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill.css";

import _implicitScopedStylesheets from "./skill.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M438 468a54 54 0 1155-54 54 54 0 01-55 54zm335 89l-72-108v-9a240 240 0 00-239-240 220 220 0 00-57 7 239 239 0 00-182 233 219 219 0 0036 127c42 60 70 108 53 173a46 46 0 009 42 44 44 0 0036 18h196a47 47 0 0047-38 50 50 0 002-12 24 24 0 0124-20h14a47 47 0 0047-34 413 413 0 0015-96h51a28 28 0 0022-16 29 29 0 00-2-27zm-198-84l-10 16a22 22 0 01-18 9 24 24 0 01-7-1l-26-10a116 116 0 01-39 22l-5 29a20 20 0 01-20 16h-20a20 20 0 01-20-16l-5-29a100 100 0 01-36-20l-29 10a24 24 0 01-7 1 21 21 0 01-17-10l-10-16a19 19 0 014-25l24-19a101 101 0 01-3-21 94 94 0 013-20l-23-20a19 19 0 01-5-25l10-17a20 20 0 0118-10 24 24 0 017 2l28 10a115 115 0 0137-21l4-28a19 19 0 0120-16h20a19 19 0 0120 15l5 28a113 113 0 0137 21l28-10a24 24 0 017-2 21 21 0 0118 10l10 16a20 20 0 01-5 26l-23 19a96 96 0 012 21 94 94 0 01-2 20l23 19a20 20 0 015 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7pmgrakrs70";
freezeTemplate(tmpl);
