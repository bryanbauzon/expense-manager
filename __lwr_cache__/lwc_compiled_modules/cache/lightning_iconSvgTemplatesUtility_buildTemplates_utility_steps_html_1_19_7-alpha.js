import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./steps.css";

import _implicitScopedStylesheets from "./steps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 502h-70v-48h70zm-141 0h-70v-48h70zm-140 0H93v-48h70zm-94-59H21v-70h48zm430-17h-48v-70h48zM69 303H21v-70h48zm430-17h-48v-70h48zM69 163H21V93h48zm430-16h-48V77h48zm-73-81h-70V18h70zm-140 0h-70V18h70zm-139 0H77V18h70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sd7krbmje5";
freezeTemplate(tmpl);
