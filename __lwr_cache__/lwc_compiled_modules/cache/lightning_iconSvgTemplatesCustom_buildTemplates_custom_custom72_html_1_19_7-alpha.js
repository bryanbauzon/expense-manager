import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom72.css";

import _implicitScopedStylesheets from "./custom72.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M770 200H230c-17 0-30 13-30 30s13 30 30 30h240v62a218 218 0 00-190 217v69c0 73 58 132 132 132h177c73 0 131-59 131-133v-69c0-111-82-203-190-217v-61h240c17 0 30-13 30-30s-13-30-30-30zM640 538c0 29-23 52-52 52H412c-29 0-51-23-52-52v1-1 1c1-77 62-139 138-139h4c76 0 137 62 138 138z"${3}/><circle cx="260" cy="760" r="40"${3}/><circle cx="740" cy="760" r="40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3d8sbmf2q08";
freezeTemplate(tmpl);
