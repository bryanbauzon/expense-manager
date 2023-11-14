import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_skill.css";

import _implicitScopedStylesheets from "./resource_skill.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M439 454a60 60 0 10120 0 60 60 0 10-120 0zm60-254a254 254 0 10252 255c0-138-112-255-252-255zm166 337l-12 19a27 27 0 01-21 12 28 28 0 01-9-2l-32-13a140 140 0 01-46 27l-6 36a25 25 0 01-24 20h-24a25 25 0 01-24-20l-6-36a120 120 0 01-45-25l-34 12a28 28 0 01-8 2 25 25 0 01-22-12l-11-20a24 24 0 016-31l28-23a127 127 0 01-3-26 118 118 0 013-26l-28-23a24 24 0 01-6-31l11-20a24 24 0 0122-12 28 28 0 018 2l34 12a138 138 0 0145-26l6-34a23 23 0 0124-19h24a23 23 0 0124 18l6 35a136 136 0 0145 25l33-12a28 28 0 019-2 25 25 0 0121 12l12 20a25 25 0 01-6 31l-28 24a120 120 0 013 26 118 118 0 01-3 25l28 23a25 25 0 016 32zM260 642h-13a48 48 0 00-47 48v63a47 47 0 0047 47h506a48 48 0 0047-47v-63a47 47 0 00-47-48h-16a302 302 0 01-477 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44mbpumaira";
freezeTemplate(tmpl);
