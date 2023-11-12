import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward_up.css";

import _implicitScopedStylesheets from "./forward_up.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M82 496l315-315c9-9 23-2 23 9v182c0 11 9 20 20 20h42a20 20 0 0020-20l-2-331a20 20 0 00-20-20H148a20 20 0 00-20 20v40c0 11 9 20 20 20h182c12 1 19 15 10 24L26 439c-8 8-9 20-1 27l28 28c8 8 21 10 29 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ps485avc6u";
freezeTemplate(tmpl);
