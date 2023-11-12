import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_graph.css";

import _implicitScopedStylesheets from "./data_graph.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M338 240a123 123 0 10-154 0l-15 26-32 56a91 91 0 1034 19l32-55 15-27a122 122 0 0087 0l15 27 30 54a91 91 0 1035-18l-31-55-16-27v-1zM111 461a52 52 0 100-104 52 52 0 000 104zm298 0a52 52 0 100-104 52 52 0 000 104z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1gbthsf4m2s";
freezeTemplate(tmpl);
