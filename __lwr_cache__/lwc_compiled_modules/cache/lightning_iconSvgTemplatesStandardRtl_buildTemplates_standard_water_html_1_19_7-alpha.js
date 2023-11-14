import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./water.css";

import _implicitScopedStylesheets from "./water.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M561 342c13 26 27 51 42 76l22 34c34 52 68 106 66 169-3 100-91 183-190 183-51 0-101-22-137-58-38-39-58-92-53-147 4-54 34-100 64-145l23-36a1023 1023 0 0068-133l1-3c8-21 17-42 21-64v-1l1-5c3-9 16-11 21-3l3 9a823 823 0 0048 124zm86 275a16 16 0 00-33-1c-2 59-54 109-113 109a16 16 0 000 33c76 0 143-64 146-141z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1fbcp3ba2qe";
freezeTemplate(tmpl);
