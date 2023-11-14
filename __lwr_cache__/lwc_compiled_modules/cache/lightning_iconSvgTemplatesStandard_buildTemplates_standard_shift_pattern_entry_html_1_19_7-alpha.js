import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern_entry.css";

import _implicitScopedStylesheets from "./shift_pattern_entry.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M518 200a20 20 0 0120 20v140a49 49 0 0052 53h140a20 20 0 0120 20v307a61 61 0 01-60 60H310a61 61 0 01-60-60V260a61 61 0 0160-60h208zm110 483H510a12 12 0 00-12 12v33a12 12 0 0012 12h117a12 12 0 0012-12v-33a12 12 0 00-12-12zm0-135H372a12 12 0 00-12 12v79a12 12 0 0012 12h255a12 12 0 0012-12v-79a12 12 0 00-12-12zm-139-88H372a12 12 0 00-12 12v33a12 12 0 0012 11h117a12 12 0 0012-11v-33a12 12 0 00-12-12zm114-260a17 17 0 0111 4l132 132a17 17 0 014 12 15 15 0 01-14 15H630a44 44 0 01-42-43V214a15 15 0 0115-14z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-4pft7ldrlqn";
freezeTemplate(tmpl);
