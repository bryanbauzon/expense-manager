import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_consumed_state.css";

import _implicitScopedStylesheets from "./product_consumed_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M236 355a13 13 0 01-9-5L106 229a13 13 0 01-5-10 13 13 0 015-9l18-20a13 13 0 0110-4 13 13 0 0110 4l50 50a10 10 0 0015-6V44a14 14 0 0114-14h27a16 16 0 0114 14v191a10 10 0 0016 6l50-50a13 13 0 0119 0l18 19a13 13 0 010 19L246 350a13 13 0 01-10 5zm40 53a127 127 0 0017 54H56a36 36 0 01-36-36V304a14 14 0 0114-13h26a14 14 0 0113 13v90a14 14 0 0013 14zm32-10a96 96 0 1196 96 96 96 0 01-96-96zm156-23l-64 65a11 11 0 01-17 0l-31-31a6 6 0 010-9l8-8a6 6 0 019 0l22 22 56-55a6 6 0 018 0l9 8a6 6 0 010 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2j4s1tqo3ev";
freezeTemplate(tmpl);
