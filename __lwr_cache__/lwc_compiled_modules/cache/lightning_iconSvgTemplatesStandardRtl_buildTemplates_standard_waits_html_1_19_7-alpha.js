import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./waits.css";

import _implicitScopedStylesheets from "./waits.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 405c0-10-9-19-19-19H519c-10 0-19 9-19 19v37c0 10 9 19 19 19h178L504 698l-1 1c-2 3-4 7-4 11v37c0 10 9 19 19 19h263c10 0 19-9 19-19v-37c0-10-9-19-19-19H606l190-233c3-4 4-8 3-13v-40zM500 253c0-10-9-19-19-19H219c-10 0-19 9-19 19v37c0 10 9 19 19 19h178L204 546l-1 1c-2 3-3 6-3 10v37c0 10 9 19 19 19h263c10 0 19-9 19-19v-37c0-10-9-19-19-19H306l190-233c3-4 4-8 3-13v-39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ucedk1vvl4";
freezeTemplate(tmpl);
