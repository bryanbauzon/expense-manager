import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_text.css";

import _implicitScopedStylesheets from "./display_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2.5 8.6v34.7a6 6 0 006.1 6.1h34.8a6 6 0 006.1-6.1V8.6a6 6 0 00-6.1-6.1H8.5a6 6 0 00-6 6.1zm39 4.1v2.1a2 2 0 01-2 2h-23a2 2 0 01-2-2v-2.1c0-1.1.9-2 2-2h22.9c1.1 0 2 .9 2.1 2zM17.3 37.3c0-1.1.9-2 2-2h20a2 2 0 012 2v2a2 2 0 01-2 2h-20a2 2 0 01-2-2v-2zM10.7 27v-2c0-1.1.9-2 2-2h26.6a2 2 0 012 2v2a2 2 0 01-2 2H12.6c-1.1 0-2-.9-1.9-2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-3bmmicqlre7";
freezeTemplate(tmpl);
