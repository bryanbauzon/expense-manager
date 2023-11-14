import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entity.css";

import _implicitScopedStylesheets from "./entity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M744 287c0-48-109-87-244-87s-244 39-244 87v30c0 48 109 87 244 87s244-39 244-87zM256 387c0 38 109 68 244 68s244-30 244-68v62c0 48-109 87-244 87s-244-39-244-87zm0 0c0 38 109 68 244 68s244-30 244-68v62c0 48-109 87-244 87s-244-39-244-87zm0 132c0 38 109 68 244 68s244-30 244-68v61c0 48-109 87-244 87s-244-38-244-85zm0 133c0 38 110 68 244 68s244-30 244-68v62c0 48-109 87-244 87s-244-39-244-87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-28l3ai6vonu";
freezeTemplate(tmpl);
