import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet.css";

import _implicitScopedStylesheets from "./snippet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M741 239c-121 0-213 94-213 214v288c0 11 9 20 20 20h228c11 0 20-9 20-20V513c0-11-9-20-20-20H608v-40c0-67 66-134 133-134h35c11 0 20-9 20-20v-40c0-11-9-20-20-20zm-333 0c-121 0-213 94-213 214v288c0 11 9 20 20 20h228c11 0 20-9 20-20V513c0-11-9-20-20-20H276v-40c0-67 66-134 133-134h35c11 0 20-9 20-20v-40c0-11-9-20-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ev7kko8eua";
freezeTemplate(tmpl);
