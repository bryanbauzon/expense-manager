import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_file.css";

import _implicitScopedStylesheets from "./add_file.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M97 361V113c-26 0-47 21-47 46v294c0 26 21 47 47 47h233c26 0 47-21 47-46H190c-51 0-93 0-93-93zm357-202h-78c-26 0-47-21-47-46V35c1-8-6-15-15-15H190c-26 0-47 21-47 46v294c0 26 21 46 47 46h233c26 0 47-21 47-46V175c0-9-7-16-16-16zm13-65l-72-71c-2-2-4-3-7-3-6 0-11 5-11 11v51c0 17 14 31 31 31h51c6 0 11-5 11-11 0-3-1-5-3-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4q7b97mgbme";
freezeTemplate(tmpl);
