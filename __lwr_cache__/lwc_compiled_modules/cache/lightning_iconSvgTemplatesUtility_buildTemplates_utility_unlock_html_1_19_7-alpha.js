import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./unlock.css";

import _implicitScopedStylesheets from "./unlock.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M100 181v4-4zm320 49H160v-47c0-53 40-100 93-103a100 100 0 01103 72c1 4 5 8 10 8h41a10 10 0 0010-12A160 160 0 00252 20c-85 4-150 77-152 161v49a40 40 0 00-40 40v190a40 40 0 0040 40h320a40 40 0 0040-40V270a40 40 0 00-40-40zM306 427c2 6-3 13-10 13h-73c-7 0-12-6-10-13l18-60a46 46 0 01-20-48 50 50 0 0139-38c32-6 60 17 60 47 0 16-8 31-21 39l17 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-34tsq6b21kj";
freezeTemplate(tmpl);
