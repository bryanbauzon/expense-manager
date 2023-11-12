import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./clock.css";

import _implicitScopedStylesheets from "./clock.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20C128 20 20 128 20 260s108 240 240 240 240-108 240-240S392 20 260 20zm0 420c-99 0-180-81-180-180S161 80 260 80s180 81 180 180-81 180-180 180zm34-178c-3-3-4-7-4-11v-96c0-8-7-15-15-15h-30c-8 0-15 7-15 15v121c0 4 2 8 4 11l74 74c6 6 15 6 21 0l21-21c6-6 6-15 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3r73shvslrr";
freezeTemplate(tmpl);
