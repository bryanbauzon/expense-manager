import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom109.css";

import _implicitScopedStylesheets from "./custom109.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M797 464l-14-21-41 18a305 305 0 00-249-146c-149 0-289 137-289 282v21h71l-1-12a83 83 0 010-9c0-117 99-213 219-213a220 220 0 01188 104l-139 60a81 81 0 00-90-9 77 77 0 00-33 105 81 81 0 00108 33 77 77 0 0042-77l129-77a206 206 0 0114 74v9l-1 12h72v-12a252 252 0 00-26-118l39-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-78e21d7au81";
freezeTemplate(tmpl);
