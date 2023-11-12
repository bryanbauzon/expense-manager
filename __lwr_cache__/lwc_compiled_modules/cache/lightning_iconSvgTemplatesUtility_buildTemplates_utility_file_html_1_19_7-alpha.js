import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./file.css";

import _implicitScopedStylesheets from "./file.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M97 361V113a47 47 0 00-47 46v294c0 26 21 47 47 47h233c26 0 47-21 47-46H190c-51 0-93 0-93-93zm357-202h-78a47 47 0 01-47-46V35c1-8-6-15-15-15H190a47 47 0 00-47 46v294c0 26 21 46 47 46h233c26 0 47-21 47-46V175c0-9-7-16-16-16zm13-65l-72-71a10 10 0 00-7-3c-6 0-11 5-11 11v51c0 17 14 31 31 31h51c6 0 11-5 11-11 0-3-1-5-3-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-u2dqhro71t";
freezeTemplate(tmpl);
