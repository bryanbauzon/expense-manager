import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tabset.css";

import _implicitScopedStylesheets from "./tabset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M316 20H204c-7 0-12 6-12 13v25c0 7 6 13 12 13h112c7 0 12-6 12-13V33c1-7-5-13-12-13zm171 0H375c-7 0-13 6-13 13v25c0 7 6 13 13 13h112c7-1 13-6 13-13V33c0-7-6-13-13-13zm0 84H170c-7 0-13-6-13-13V33c0-7-6-13-13-13H33c-7 0-13 6-13 13v455c0 6 6 12 13 12h454c7 0 13-6 13-13V117c0-7-6-13-13-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-60enk2bqglc";
freezeTemplate(tmpl);
