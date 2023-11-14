import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort_policy.css";

import _implicitScopedStylesheets from "./sort_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M351 200h-91a60 60 0 00-60 60v70a60 60 0 0060 60h90a60 60 0 0060-60v-70a60 60 0 00-59-60zm-36 130h-20a35 35 0 010-70h20a35 35 0 010 70zm217 60h90a60 60 0 0060-60v-70a60 60 0 00-60-60h-90a60 60 0 00-60 60v70a60 60 0 0060 60zm34-130h20a35 35 0 010 70h-20a35 35 0 110-70zM351 450h-91a60 60 0 00-60 60v70a60 60 0 0060 60h90a60 60 0 0060-60v-70a60 60 0 00-59-60zm-36 130h-20a35 35 0 110-70h20a35 35 0 010 70zm482 126l-15-14a10 10 0 00-14-1l-1 1-24 24a7 7 0 01-10 0 6 6 0 01-2-5V600a11 11 0 00-10-10h-21a11 11 0 00-10 10v111a7 7 0 01-7 7 7 7 0 01-5-2l-24-24a10 10 0 00-14-1v1l-15 14a10 10 0 000 14l79 77a10 10 0 0014 0h1l78-77a10 10 0 000-14zM631 559v-1l15-14a10 10 0 000-14l-79-77a10 10 0 00-14-1v1l-79 77a10 10 0 000 14l15 14a10 10 0 0014 1v-1l25-24a7 7 0 0112 5v111a11 11 0 0010 10h20a11 11 0 0010-10V539a7 7 0 0112-5l24 24a10 10 0 0015 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ppno1e0mvi";
freezeTemplate(tmpl);
