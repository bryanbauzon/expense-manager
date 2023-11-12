import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./package_org_beta.css";

import _implicitScopedStylesheets from "./package_org_beta.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 230h-58c-4 15-11 28-21 40h75v60H80v-60h60v-40H76c-20 0-36 16-36 36v194a30 30 0 0030 30h380a30 30 0 0030-30V266c0-20-16-36-36-36zM350 99c0-39-34-69-72-69h-83c-8 0-15 7-15 15v210c0 8 7 15 15 15h85c39 0 70-32 69-71 0-19-8-36-21-48a73 73 0 0022-52zM220 70h60a30 30 0 110 60h-60V70zm90 130a30 30 0 01-30 30h-60v-60h60a30 30 0 0130 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1t58mdhamuv";
freezeTemplate(tmpl);
