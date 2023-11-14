import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_template_entry.css";

import _implicitScopedStylesheets from "./work_plan_template_entry.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M696 593a102 102 0 10102 102 102 102 0 00-102-102zm66 74l-75 75a15 15 0 01-20 0l-37-36a7 7 0 010-10l10-10a7 7 0 0110 0l26 26 65-65a7 7 0 0110 0l10 10a8 8 0 011 10zM445 300h178a16 16 0 0016-16v-33a49 49 0 00-49-49H477a49 49 0 00-49 49v33a17 17 0 0017 16zm116 433H314a49 49 0 01-48-49V344h-16a49 49 0 00-48 49v354a49 49 0 0048 49h349a121 121 0 01-38-63zm-205-38h201a151 151 0 017-37 137 137 0 0123-45h-94a16 16 0 01-16-16v-17a16 16 0 0116-16h162l4 1a136 136 0 0136-5 139 139 0 0165 16V292a49 49 0 00-49-49h-16a7 7 0 00-8 8v33a66 66 0 01-65 66H445a66 66 0 01-65-66v-33a7 7 0 00-8-8h-16a49 49 0 00-49 49v353a51 51 0 0049 50zm121-280a16 16 0 0116-16h162a16 16 0 0116 16v16a16 16 0 01-16 16H494a16 16 0 01-16-16v-16zm0 82a16 16 0 0116-16h162a16 16 0 0116 16v16a16 16 0 01-16 16H494a16 16 0 01-16-16v-16zm-80-82a16 16 0 0116-16h16a16 16 0 0116 16v16a16 16 0 01-16 16h-16a16 16 0 01-16-16zm0 82a16 16 0 0116-16h16a16 16 0 0116 16v16a16 16 0 01-16 16h-16a16 16 0 01-16-16zm0 83a16 16 0 0116-16h16a16 16 0 0116 16v16a16 16 0 01-16 16h-16a16 16 0 01-16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-102keite32q";
freezeTemplate(tmpl);
