import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pricing_workspace.css";

import _implicitScopedStylesheets from "./pricing_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M366 205a21 21 0 0121 21v14a21 21 0 01-21 21h-63a42 42 0 00-42 40v396a42 42 0 0040 42h396a42 42 0 0042-40v-65a21 21 0 0121-21h14a21 21 0 0121 21v77a84 84 0 01-84 84H289a84 84 0 01-84-84V289a84 84 0 0184-84zm180 35l104 2a43 43 0 0122 9l41 41 41 41a29 29 0 019 22l2 104a32 32 0 01-9 23L585 653a31 31 0 01-44 0l-94-94-94-94a31 31 0 010-44l171-171a26 26 0 0122-10zm-58 166l-17 17a8 8 0 000 11l100 100a8 8 0 0011 0l17-17a8 8 0 000-11L499 406a8 8 0 00-11 0zm47-47l-17 17a8 8 0 000 11l100 100a8 8 0 0011 0l17-17a8 8 0 000-11L546 359a8 8 0 00-11 0zm161-50a31 31 0 100 44 31 31 0 000-44z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-16gkauo86fk";
freezeTemplate(tmpl);
