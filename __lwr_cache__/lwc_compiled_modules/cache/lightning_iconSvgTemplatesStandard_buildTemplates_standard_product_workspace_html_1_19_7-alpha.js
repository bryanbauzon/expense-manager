import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_workspace.css";

import _implicitScopedStylesheets from "./product_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M366 205a21 21 0 0121 21v14a21 21 0 01-21 21h-63a42 42 0 00-42 40v396a42 42 0 0040 42h396a42 42 0 0042-40v-65a21 21 0 0121-21h14a21 21 0 0121 21v77a84 84 0 01-84 84H289a84 84 0 01-84-84V289a84 84 0 0184-84zm312 287l38-38a13 13 0 000-19L562 280a13 13 0 00-19 0l-38 38a13 13 0 000 19l155 155a12 12 0 0018 0zm87-87l19-19a13 13 0 000-19L630 212a13 13 0 00-19 0l-19 19a13 13 0 000 19l155 155a13 13 0 0018 0zM634 536a12 12 0 001-19L480 362a13 13 0 00-19 0l-1 1a13 13 0 000 19l155 155a13 13 0 0019-1zm-55 54l9-9a13 13 0 000-19L434 407a13 13 0 00-19 0l-9 9a13 13 0 000 19l155 155a11 11 0 0018 0zm-83 84l38-38a13 13 0 000-19L380 462a13 13 0 00-19 0l-38 38a13 13 0 000 19l155 155a13 13 0 0018 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5dvpdl3ei2k";
freezeTemplate(tmpl);
