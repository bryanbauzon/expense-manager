import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cancel_checkout.css";

import _implicitScopedStylesheets from "./cancel_checkout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M676 520a165 165 0 11-153 101c26-62 87-102 153-101zm85 63c-4-3-10-3-14 0l-73 73-69-69-1-1c-4-3-10-2-13 1l-17 17c-4 4-4 10 0 14l69 69-68 69-1 1c-3 3-3 9 1 13l16 16c4 4 11 4 14 0l69-68 73 73c4 3 10 3 14 0l16-17c4-4 4-10 0-14l-72-73 73-73c4-4 4-10 0-14zm-353 87a58 58 0 110 116 58 58 0 010-116zM230 150c15 0 29 10 33 25l9 31h516c14 0 26 14 21 28l-61 214c-1 5-4 9-8 12a232 232 0 00-145 5H393c-21 0-38 21-30 43v1c3 13 17 24 31 24h104c-17 19-31 42-41 67H345c-16 0-29-10-33-25L206 218h-32c-19 0-35-17-34-36 1-18 18-32 36-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-66b06rr3hnu";
freezeTemplate(tmpl);
