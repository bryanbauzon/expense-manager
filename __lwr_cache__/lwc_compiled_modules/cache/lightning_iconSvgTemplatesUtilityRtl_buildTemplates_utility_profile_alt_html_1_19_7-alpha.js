import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./profile_alt.css";

import _implicitScopedStylesheets from "./profile_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a240 240 0 100 480 240 240 0 000-480zm0 90c41 0 74 37 74 83s-33 82-74 82-74-37-74-83 33-82 74-82zm150 270a30 30 0 01-30 30H140a30 30 0 01-30-30v-14c0-36 43-59 83-76l3-2a10 10 0 0110 0 97 97 0 00107 0 10 10 0 0110 0l3 2c42 17 84 40 84 76v14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1s5m5htlu9v";
freezeTemplate(tmpl);
