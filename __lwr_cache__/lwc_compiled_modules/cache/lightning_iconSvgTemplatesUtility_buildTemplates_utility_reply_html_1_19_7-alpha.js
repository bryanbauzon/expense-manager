import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reply.css";

import _implicitScopedStylesheets from "./reply.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M192 181s-11-11-5-17l56-56c6-6 6-15 0-21l-21-22c-6-6-15-6-21 0L66 200c-6 6-6 15 0 21l135 135c6 6 15 6 21 0l21-21c6-6 6-15 0-21l-55-56c-6-6-2-15 5-17 111 4 201 93 208 206 0 8 7 14 15 14h30c9 0 14-7 13-16a272 272 0 00-267-264z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ke50nfd4f3";
freezeTemplate(tmpl);
