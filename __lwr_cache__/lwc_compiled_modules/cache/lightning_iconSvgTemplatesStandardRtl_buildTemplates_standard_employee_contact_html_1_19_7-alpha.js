import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_contact.css";

import _implicitScopedStylesheets from "./employee_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M203 357v286a60 60 0 0060 60h474a60 60 0 0060-60V357a60 60 0 00-60-60H262a61 61 0 00-59 60zm484 70a76 76 0 11-76-76 77 77 0 0176 76zM494 618a115 115 0 01114-99h4a115 115 0 01114 99c0 5-2 16-20 16H511c-15 0-18-11-17-16zm-212-83a20 20 0 0120-20h88a20 20 0 0120 20v30a20 20 0 01-20 20h-88a20 20 0 01-20-20zm0-110a20 20 0 0120-20h148a20 20 0 0120 20v30a20 20 0 01-20 20H302a20 20 0 01-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6a91a4ngl7c";
freezeTemplate(tmpl);
