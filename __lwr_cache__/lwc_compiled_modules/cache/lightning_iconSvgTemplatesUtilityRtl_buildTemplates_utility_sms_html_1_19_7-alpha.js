import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sms.css";

import _implicitScopedStylesheets from "./sms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 40C127 40 21 138 21 259c0 38 11 74 29 106 3 5 4 11 2 17l-31 85c-3 8 5 15 13 13l86-33c5-2 11-1 17 2 36 20 79 32 125 32 131-1 238-99 238-220-1-123-108-221-240-221zm-96 256c-3 5-6 10-10 13s-9 6-15 8c-5 2-11 2-17 2a54 54 0 01-41-17l-2-2c-1-1 0-3 2-5l16-15c2-2 4-2 5-1l2 3 8 7c5 3 10 3 16 2l5-2 3-3 1-4c0-4-1-5-2-6a20 20 0 00-9-5l-13-4-14-6c-5-3-8-7-11-11-3-5-5-11-5-19a34 34 0 0115-30c4-3 9-6 15-7 12-3 24-3 36 1 6 2 12 6 15 8l3 2c2 1 1 4-1 6l-15 15c-2 2-5 2-7 0l-4-3c-5-3-12-4-18-3l-4 2-3 3-1 4c0 3 1 4 2 5l9 5 13 4 14 6c5 3 8 7 11 11 3 5 5 11 5 19 0 6-1 12-4 17zm166 14c0 6-5 10-11 10h-10c-6 0-9-4-9-10v-59c0-6-8-7-10-2l-17 45c-1 4-5 6-9 6h-7c-4 0-8-3-9-6l-18-45c-2-5-10-4-10 2v59c0 6-5 10-11 10h-10c-6 0-9-4-9-10V200c0-6 4-10 9-10h26c4 0 8 3 9 6l20 52c2 4 8 4 9 0l20-52c1-4 5-6 9-6h27c6 0 11 4 11 10v110zm105-13c-3 5-6 10-11 13-4 3-9 6-15 8s-11 2-17 2a54 54 0 01-41-17l-2-2c-1-1 0-3 2-5l16-15c2-2 4-2 5-1l2 3 8 7c5 3 11 3 16 2l5-2 3-3 1-4c0-4-1-5-2-6a20 20 0 00-9-5l-13-4-14-6c-5-3-9-7-12-11-3-5-5-11-5-19a34 34 0 0115-30c4-3 10-6 15-7 12-3 24-3 36 1 6 2 12 6 15 9l3 3c2 1 1 4-1 6l-15 15c-2 2-5 2-7 0l-4-3c-5-3-12-4-18-3l-4 2-3 3-1 4c0 3 1 4 2 5l9 5 13 4 14 6c5 3 8 7 12 11 3 5 5 11 5 19 1 3 0 10-3 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6tfgp5j1b06";
freezeTemplate(tmpl);
