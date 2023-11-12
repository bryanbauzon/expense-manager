import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./undo.css";

import _implicitScopedStylesheets from "./undo.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M303 126a189 189 0 110 378h-82c-8 0-13-6-13-14v-32c0-8 6-15 14-15h81c71 0 128-57 128-128s-57-128-128-128H164l-11 1c-8 4-6 10 1 17l49 49c6 6 5 15-1 21l-22 22c-6 6-13 6-19 1L31 168c-5-5-5-13 0-18L160 21c6-6 16-6 21 0l21 21c6 6 6 16 0 21l-49 49c-6 6-6 13 4 13h7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2jslh1rbmcm";
freezeTemplate(tmpl);
