import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attach.css";

import _implicitScopedStylesheets from "./attach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M395 634a18.7 18.7 0 0026 0l125-125a26.1 26.1 0 0135 0 26.6 26.6 0 011 37l-1 1-154 151a88.1 88.1 0 01-124 0l-1-1a88.1 88.1 0 010-124l272-272a88.1 88.1 0 01124 0l1 1a88.1 88.1 0 010 124l-1 1a18.2 18.2 0 00-3 22 213.8 213.8 0 0118 44 12.2 12.2 0 0015 9l6-3c10-10 19-20 19-20a163 163 0 000-231h-3a163 163 0 00-231 0L248 518a163 163 0 000 231l3 3a161.5 161.5 0 00229 1l1-1 154-154a101.8 101.8 0 10-142-146l-4 4-123 124a21.3 21.3 0 000 28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7kdj510jbao";
freezeTemplate(tmpl);
