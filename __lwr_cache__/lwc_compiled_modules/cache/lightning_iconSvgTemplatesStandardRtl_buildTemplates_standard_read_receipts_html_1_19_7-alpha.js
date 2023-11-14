import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./read_receipts.css";

import _implicitScopedStylesheets from "./read_receipts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M489 434c7 6 15 6 22 0l230-213c4-8 3-21-13-21l-456 1c-12 0-22 11-13 21zm254-122c0-11-13-16-20-9L544 469a66 66 0 01-88 0L276 303c-8-7-20-2-20 9v212c0 27 22 49 49 49h239v-61c2-33 28-60 62-62h7c33 2 60 28 62 62v61h22c27 0 49-22 49-49-3 0-3-147-3-212zm-32 325l-67-23c-5-2-9-7-9-12v-89c0-14-11-24-25-24h-2c-14 0-25 11-25 24v175c0 15-19 21-27 8l-17-36c-9-15-29-20-44-9l-11 9 56 133c2 6 8 9 15 9h147c7 0 13-5 15-11l26-93c6-27-8-52-32-61z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-si492p5v32";
freezeTemplate(tmpl);
