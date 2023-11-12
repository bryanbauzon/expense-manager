import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom99.css";

import _implicitScopedStylesheets from "./custom99.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74 36H57.2a9.4 9.4 0 00-2.1-3.1l6.3-8.1a3 3 0 00-.5-4.2 3 3 0 00-4.2.5l-7 9L48 30l-1.6.1-7-9a3 3 0 00-4.2-.5 3 3 0 00-.5 4.2l6.3 8.1c-.9.9-1.6 1.9-2.1 3.1H26a6 6 0 00-6 6v28a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zm-8 32a2 2 0 01-2 2H28a2 2 0 01-2-2V44c0-1.1.9-2 2-2h36a2 2 0 012 2v24zm7-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3bfalqektr2";
freezeTemplate(tmpl);
