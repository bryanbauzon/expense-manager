import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./system_and_global_variable.css";

import _implicitScopedStylesheets from "./system_and_global_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 756c0-37 18-65 42-81v-37c-13-9-23-22-27-37-5-21 2-45 15-62l11-12a185 185 0 01100-33c27 0 51 11 68 27 24-24 49-29 64-29 14 0 27 3 39 9v-2c0-165-135-300-300-300S200 335 200 500c0 164 134 299 298 300-7-13-10-27-10-44zm250-286h-79c-3-71-19-133-43-180 66 37 112 103 122 180zM530 273c34 29 64 103 69 197h-69zM262 530h79c3 71 19 133 43 180a242 242 0 01-122-180zm79-60h-79c10-77 56-143 122-180-24 47-39 109-43 180zm129 257c-34-29-64-103-69-197h69zm0-257h-69c5-94 35-168 69-197zm285 154c13 0 39-11 39-45s-25-36-32-36c-15 0-30 11-43 34l-29 49h-1l-7-36c-3-14-19-45-53-45s-65 20-65 20a21 21 0 0011 39l9-2s26-14 31 0l5 14c7 22 13 49 18 73l-23 31s-25-9-38-9-39 11-39 45 25 36 32 36c15 0 30-11 43-34l28-49 10 45c9 24 28 39 54 39 0 0 27 0 58-18 8-3 13-11 13-19 0-11-9-21-21-21l-9 2s-23 13-30 3c-6-10-10-24-14-42l-11-51 23-33c3 1 28 10 41 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-790v7r8el6h";
freezeTemplate(tmpl);
