import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./redo.css";

import _implicitScopedStylesheets from "./redo.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M355 125h7c10 0 10-7 4-13l-49-49c-6-5-6-15 0-21l21-21c5-6 15-6 21 0l129 129c5 5 5 13 0 18L358 298c-6 5-13 5-19-1l-22-22c-6-6-7-15-1-21l49-49c7-7 9-13 1-17l-11-1H216c-71 0-128 57-128 128s57 128 128 128h81c8 0 14 7 14 15v32c0 8-5 14-13 14h-82a189 189 0 110-378z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6emeoqovevj";
freezeTemplate(tmpl);
