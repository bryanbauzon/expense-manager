import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./package_org.css";

import _implicitScopedStylesheets from "./package_org.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 230H319l-40 40h161v60H80v-60h81l-40-40H76c-20 0-36 16-36 36v194a30 30 0 0030 30h380a30 30 0 0030-30V266c0-20-16-36-36-36zm-238 28c8 8 20 8 28 0L424 68c4-4 4-10 0-14l-28-28a10 10 0 00-14 0L220 188l-67-67a10 10 0 00-14 0l-28 28a10 10 0 000 14l95 95z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7uhftvvgdl8";
freezeTemplate(tmpl);
