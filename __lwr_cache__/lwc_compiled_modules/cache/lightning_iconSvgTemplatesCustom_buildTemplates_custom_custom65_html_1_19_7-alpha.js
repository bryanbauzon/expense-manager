import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom65.css";

import _implicitScopedStylesheets from "./custom65.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M721 670H219c-10 0-19 9-19 19v1c0 33 27 60 60 60h420c33 0 60-27 60-60v-1c0-10-9-19-19-19zm-21-400H221c-10 0-18 9-19 20-3 27-3 75 1 104 13 93 63 172 132 214 3 2 7 3 10 3h209c4 0 7-1 10-3 39-24 73-60 96-104a120 120 0 00159-114c0-66-53-120-119-120zm0 180l-15-2c10-32 15-66 15-102v-16c33 0 60 27 60 60s-27 60-60 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7viliehfpnv";
freezeTemplate(tmpl);
