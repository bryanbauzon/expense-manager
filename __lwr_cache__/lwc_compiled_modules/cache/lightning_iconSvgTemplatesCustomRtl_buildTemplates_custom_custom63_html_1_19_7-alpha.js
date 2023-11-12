import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom63.css";

import _implicitScopedStylesheets from "./custom63.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42 60h16a2 2 0 002-2V42a2 2 0 00-2-2H42a2 2 0 00-2 2v16c0 1.1.9 2 2 2zm35-7c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-1a6 6 0 00-6-6h-1v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-1a6 6 0 00-6 6v1h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v1a6 6 0 006 6h1v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h1a6 6 0 006-6v-1h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5zM66 63a3 3 0 01-3 3H37a3 3 0 01-3-3V37a3 3 0 013-3h26a3 3 0 013 3v26z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-7ego49e4cqm";
freezeTemplate(tmpl);
