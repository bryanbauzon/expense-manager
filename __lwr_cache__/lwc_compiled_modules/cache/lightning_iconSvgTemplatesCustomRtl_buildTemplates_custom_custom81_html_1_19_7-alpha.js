import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom81.css";

import _implicitScopedStylesheets from "./custom81.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M769 200l-49 1c-154 8-331 46-340 49-12 4-20 16-20 28v326c-10-4-26-6-40-6-66 0-120 45-120 100s54 100 120 100 120-45 120-100V494c0-9 6-17 15-19 49-12 117-25 244-33 12-1 21 8 21 20v103c-10-4-26-6-40-6-66 0-120 45-120 100s54 100 120 100 120-45 120-100V230c0-17-14-31-31-30zm-68 158c-122 7-184 19-237 31-13 3-24-7-24-20v-31c0-9 6-17 16-20 52-12 115-25 243-33 12-1 21 8 21 20v32c0 12-8 21-19 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5gj0huu06ov";
freezeTemplate(tmpl);
