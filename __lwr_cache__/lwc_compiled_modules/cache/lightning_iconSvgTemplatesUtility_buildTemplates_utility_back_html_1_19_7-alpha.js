import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./back.css";

import _implicitScopedStylesheets from "./back.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M486 230H154c-9 0-13-11-7-17l96-96c6-6 6-15 0-21l-22-22c-6-6-15-6-21 0L25 250c-6 6-6 15 0 21l175 175c6 6 15 6 21 0l21-21c6-6 6-15 0-21l-96-96c-6-7-2-18 7-18h332c8 0 15-6 15-14v-30c0-8-6-16-14-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-u7pbmbk99i";
freezeTemplate(tmpl);
