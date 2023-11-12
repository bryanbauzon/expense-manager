import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_source.css";

import _implicitScopedStylesheets from "./add_source.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M126 54c4-5 11-5 16 0l170 170 6 6h89c6 0 9-8 5-12l-25-25a10 10 0 010-15l15-15a10 10 0 0115 0l80 80c4 5 4 10 0 16l-80 79a10 10 0 01-15 0l-15-15a10 10 0 010-15l26-25c4-4 0-12-5-12h-84l-12 12-170 170c-5 5-12 5-16 0l-14-13a10 10 0 010-16l124-125c10-10 3-27-11-27H30a10 10 0 01-10-12v-20c0-6 4-10 10-10h188c15 0 22-18 12-28L112 84c-5-5-5-12 0-16l14-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-g05u8riq4u";
freezeTemplate(tmpl);
