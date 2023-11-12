import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom37.css";

import _implicitScopedStylesheets from "./custom37.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 56H67V44.2c2.7 2.3 6.2 3.8 10 3.8 1.7 0 3-1.3 3-3s-1.3-3-3-3c-5.5 0-10-4.9-10-11v-3a2 2 0 002-2v-2a2 2 0 00-2-2h-6a2 2 0 00-2 2v2c0 1.1.9 2 2 2v3a11 11 0 11-22 0v-3a2 2 0 002-2v-2a2 2 0 00-2-2h-6a2 2 0 00-2 2v2c0 1.1.9 2 2 2v3c0 6.1-4.5 11-10 11-1.7 0-3 1.3-3 3s1.3 3 3 3a15 15 0 0010-3.8V56H20a2 2 0 00-2 2v4.8c0 1.1.9 2.2 2 2.2h4v10.8c0 1.1.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2v-4c0-3.3 2.7-5.8 6-5.8h20c3.3 0 6 2.5 6 5.8v4c0 1.1.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2V65h4c1.1 0 2-1.1 2-2.2V58a2 2 0 00-2-2zM39 43.9c3 2.5 6.8 4.1 11 4.1a16.6 16.6 0 0011-4.1V56H39V43.9z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-gdlmin62se";
freezeTemplate(tmpl);
