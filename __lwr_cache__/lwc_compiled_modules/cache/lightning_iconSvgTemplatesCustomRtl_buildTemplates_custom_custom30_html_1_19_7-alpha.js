import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom30.css";

import _implicitScopedStylesheets from "./custom30.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M71.5 28.5A28.8 28.8 0 0051 20c-1.7 0-3 1.3-3 3s1.3 3 3 3c6.1 0 11.9 2.4 16.3 6.7A23.3 23.3 0 0174 49c0 1.7 1.3 3 3 3s3-1.3 3-3c0-7.7-3-15-8.5-20.5zM51 32c-1.7 0-3 1.3-3 3s1.3 3 3 3a11 11 0 0111 11c0 1.7 1.3 3 3 3s3-1.3 3-3a17 17 0 00-17-17zm-4.3 28.7l2.6-7a5 5 0 005.3-1.1c2-2 2-5.1 0-7.1s-5.1-2-7.1 0a5 5 0 00-1 5.6L40 54 28.3 42.3c-.8-.8-2.2-.8-2.9.1-7.5 9-7 22.4 1.5 30.8a23 23 0 0030.8 1.5c.9-.7.9-2.1.1-2.9L46.7 60.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5hal32742jv";
freezeTemplate(tmpl);
