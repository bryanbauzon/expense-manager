import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic.css";

import _implicitScopedStylesheets from "./topic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M174 353c-1-3-4-6-7-7l-22-6a10 10 0 00-11 5l-38 65c-10 18-4 24 14 14l66-38c4-2 6-7 5-11zm172-186c1 3 4 6 7 7l22 6c4 1 9-1 11-5l38-66c10-18 4-24-14-14l-66 38a10 10 0 00-5 11zm-212 9c2 4 7 6 11 5l22-6c3-1 6-4 7-7l6-22a10 10 0 00-5-11l-65-39c-18-10-24-4-14 14zm252 168a10 10 0 00-11-5l-22 6c-3 1-6 4-7 7l-6 23c-1 4 1 9 5 11l66 38c18 10 24 4 14-14zm101-92l-164-44c-6-1-10-6-11-11L268 33c-5-17-12-17-17 0l-44 164c-1 6-6 10-11 11L33 252c-17 5-17 12 0 17l164 44c6 1 10 6 11 11l44 164c5 17 12 17 17 0l44-164c1-6 6-10 11-11l164-44c16-5 16-13-1-17zm-227 48c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3faubdmgqoc";
freezeTemplate(tmpl);
