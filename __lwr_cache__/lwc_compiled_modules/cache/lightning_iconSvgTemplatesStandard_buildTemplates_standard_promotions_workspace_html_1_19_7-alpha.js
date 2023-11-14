import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions_workspace.css";

import _implicitScopedStylesheets from "./promotions_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M364 200a21 21 0 0121 20v15a21 21 0 01-20 22h-65a43 43 0 00-43 40v403a43 43 0 0041 43h402a43 43 0 0043-41v-66a21 21 0 0120-21h15a21 21 0 0121 20v79a85 85 0 01-84 86H285a85 85 0 01-85-85V285a85 85 0 0185-85zm287 238a28 28 0 101 0zM519 334a28 28 0 1028 28 28 28 0 00-28-28zm270 52l-24-28a50 50 0 01-11-29l-3-36a46 46 0 00-42-42l-31-3a65 65 0 01-37-16l-24-21a46 46 0 00-60 0l-26 22a59 59 0 01-34 13l-33 3a46 46 0 00-43 42l-2 30a66 66 0 01-16 38l-20 23a46 46 0 000 60l22 27a56 56 0 0113 32l2 34a46 46 0 0042 43l31 3a64 64 0 0137 15l24 20a46 46 0 0060 1l27-23a52 52 0 0130-12l36-2a46 46 0 0042-42l3-29a73 73 0 0118-41l19-22a46 46 0 000-60zm-322-24a52 52 0 110 1zm75 153a4 4 0 01-3 2h-15a4 4 0 01-4-6l109-198a5 5 0 013-2h16a4 4 0 012 5zm162-49a52 52 0 11-52-52 52 52 0 0151 52z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6mlas839ejv";
freezeTemplate(tmpl);
