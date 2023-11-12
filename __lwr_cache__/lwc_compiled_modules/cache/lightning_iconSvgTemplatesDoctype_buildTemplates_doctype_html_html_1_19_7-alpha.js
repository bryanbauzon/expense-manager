import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./html.css";

import _implicitScopedStylesheets from "./html.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#ff5d2d" d="M514 1A507 507 0 006 508v5384c0 280 227 508 508 508h4577c280 0 507-228 507-508V2032L3708 1H513z"${3}/><path fill="#d83a00" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#feb9a5" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1894 5084c-12 0-23-2-33-6l-758-338a138 138 0 010-250l758-340a89 89 0 01122 84c-1 34-19 67-53 82l-703 300 703 298c34 15 52 46 52 82 0 55-46 88-88 88zm847-1104l-443 1329a93 93 0 01-91 63c-52 0-92-40-92-88 0-11 2-19 6-30l443-1329c13-38 49-63 91-63 52 0 90 42 90 90zm1018 760l-758 338a89 89 0 01-69-164l703-298-703-300a88 88 0 01-55-82c-2-55 44-90 90-90 11 0 24 2 34 6l758 340a138 138 0 010 250z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hdu4n0vsv7";
freezeTemplate(tmpl);
