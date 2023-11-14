import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./strikethrough.css";

import _implicitScopedStylesheets from "./strikethrough.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M121 181a180 180 0 01-3-34c0-13 3-28 9-42 6-15 15-29 28-41 12-12 29-23 48-31 20-8 43-13 71-13 25 0 49 3 72 10 18 6 35 16 50 30 6 6 6 16-1 22l-27 25c-6 5-15 6-21 0-7-7-15-13-24-18-14-7-30-11-49-11-17 0-32 2-43 7s-21 10-28 18-12 15-15 23-4 16-4 22c0 11 2 20 5 28a10 10 0 01-9 14h-49c-5 0-9-5-10-9zm278 149h-50c-7 0-12 7-9 13s4 14 4 22c0 12-3 23-8 33a84 84 0 01-52 38 119 119 0 01-120-32c-5-6-15-7-21-2l-28 24c-6 5-7 15-1 21 14 16 32 28 53 36a232 232 0 00146 5c19-6 36-16 51-28 14-12 26-27 34-45s13-37 13-59l-1-20c-2-2-6-6-11-6zm100-91c-2-6-8-9-14-9H35c-7 0-12 3-14 9l-1 5v30c0 8 7 16 15 16h450c8 0 15-8 15-16v-30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24lg7kldcro";
freezeTemplate(tmpl);
