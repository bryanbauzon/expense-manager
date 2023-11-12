import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom71.css";

import _implicitScopedStylesheets from "./custom71.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.2 30.8A30 30 0 0049.1 22 30.6 30.6 0 0020 52.6V62a6 6 0 006 6h4v4.8c0 2.6 1.9 4.9 4.5 5.2a5 5 0 005.5-5V55.2c0-2.6-1.9-4.9-4.5-5.2a5 5 0 00-5.5 5v7h-2a2 2 0 01-2-2v-7.4A24.5 24.5 0 0149.3 28 24 24 0 0174 52v8a2 2 0 01-2 2h-2v-6.8c0-2.6-1.9-4.9-4.5-5.2a5 5 0 00-5.5 5v17.8c0 2.6 1.9 4.9 4.5 5.2a5 5 0 005.5-5v-5h4a6 6 0 006-6v-9.4c0-8.1-3-16-8.8-21.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-grc7hfsqch";
freezeTemplate(tmpl);
