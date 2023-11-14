import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./moneybag.css";

import _implicitScopedStylesheets from "./moneybag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M205 91c2 6 8 9 14 9h81c6 0 12-3 14-9l32-59c2-6-2-12-8-12H182c-6 0-10 6-7 11zm102 56h-94c-79 0-143 65-143 145v160c0 26 21 48 48 48h284c26 0 48-22 48-48V292c0-80-65-145-143-145zm-23 270v27c0 5-5 8-10 8h-32c-5 0-6-3-6-8v-26c-24-5-44-15-49-20-6-6-8-11-3-18l10-16c2-4 7-6 12-6l8 2h1a80 80 0 0040 14c11 0 20-6 20-12 0-5-3-13-33-23-27-10-60-26-60-63 0-22 14-47 54-55v-24c0-5 2-8 6-8h32c5 0 10 3 10 8v23c16 4 33 12 39 16 3 2 5 6 6 10s-1 8-3 10l-14 14c-3 4-9 7-13 7l-7-2a89 89 0 00-38-14c-13 0-19 6-19 10 0 6 3 12 30 22 33 11 70 29 70 67 1 26-20 49-51 57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-quqc0ah6f7";
freezeTemplate(tmpl);
