import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead.css";

import _implicitScopedStylesheets from "./trailhead.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M509 202c-5-3-12-3-17 0-179 76-294 253-291 448v43c0 7 3 13 9 17 86 57 188 89 291 90h11c99-4 196-34 278-90 5-4 9-10 9-17v-43c5-195-110-372-290-448zM347 360c73-86 154-115 154-115 17 8 212 84 252 330h-51l-98-141c-7-9-20-12-30-5-3 1-4 4-5 5l-25 36-69-99c-7-9-20-12-30-5-3 1-4 4-5 5L301 574l-51 2c15-94 54-164 97-216zm303 216H523l33-47 30-44 64 91zM470 436l50 72-47 67H352l51-76 54-80 13 17zm48 290l-18 32c-37 0-71-5-110-14-51-13-101-34-145-61v-31c0-10 0-21 1-33h221c-17 26-9 61 18 77 3 1 5 3 7 4l20 9c6 2 8 10 6 17zm240-45c-33 20-67 37-102 48 0 0-7 3-9 3-20 7-40 12-61 16-12 3-24 4-35 5l4-7c16-27 7-61-21-77-1-1-4-1-5-3l-20-9c-7-3-10-10-7-17 0-1 1-3 1-3l18-21h235c0 10 1 21 1 33v32z"${3}/><path d="M327 638l-32 37h64zm30 76h64l-32-37zm256-26l32-37 32 37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3glgjir0om7";
freezeTemplate(tmpl);
