import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./generic_loading.css";

import _implicitScopedStylesheets from "./generic_loading.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M515 220h-30c-8 0-15 7-15 15v130c0 8 7 15 15 15h30c8 0 15-7 15-15V235c0-8-7-15-15-15zm250 250H635c-8 0-15 7-15 15v30c0 8 7 15 15 15h130c8 0 15-7 15-15v-30c0-8-7-15-15-15zM515 620h-30c-8 0-15 7-15 15v130c0 8 7 15 15 15h30c8 0 15-7 15-15V635c0-8-7-15-15-15zM380 515v-30c0-8-7-15-15-15H235c-8 0-15 7-15 15v30c0 8 7 15 15 15h130c8 0 15-7 15-15zm215-89c6 6 15 6 21 0l92-92c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-92 92c-6 6-6 15 0 21zm22 148c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l92 92c6 6 15 6 21 0l21-21c6-6 6-15 0-21zm-212 0c-6-6-15-6-21 0l-92 92c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l92-92c6-6 6-15 0-21zm-71-283c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l92 92c6 6 15 6 21 0l21-21c6-6 6-15 0-21z" opacity=".15"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6kchp6sblsc";
freezeTemplate(tmpl);
