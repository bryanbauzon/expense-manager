import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./unlinked.css";

import _implicitScopedStylesheets from "./unlinked.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M181 369l94-95 7-7 84-84 37-37 41-41c7-6 8-15 3-20l-18-18c-4-4-11-4-17-1L67 409v1c-6 6-7 15-3 20l18 18c5 5 14 4 20-3l40-40zm3-138c-5 0-8 4-10 8l-1 18 1 12 38-38zM83 360l40-40c-28-6-50-30-52-58a65 65 0 0165-69h91c7 0 14 1 21 4l39-39c-9-5-18-10-27-12-10-3-22-5-32-5h-87c-66-1-120 48-122 111-2 47 24 88 64 108zm348-207l-40 40c29 5 52 29 54 59a65 65 0 01-65 69h-90c-8 0-16-2-23-4l-39 39a119 119 0 0060 18h92a116 116 0 0051-221zM301 283h30c5 0 8-4 10-8l1-18-1-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6coc48qatb8";
freezeTemplate(tmpl);
