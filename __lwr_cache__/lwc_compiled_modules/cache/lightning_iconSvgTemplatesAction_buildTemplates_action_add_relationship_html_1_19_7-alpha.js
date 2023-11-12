import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_relationship.css";

import _implicitScopedStylesheets from "./add_relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36 20a4 4 0 00-4-4H6a4 4 0 00-4 4v26a4 4 0 004 4h26a4 4 0 004-4zm-8 14c0 .5-.5 1-1 1h-6v6c0 .5-.5 1-1 1h-2a1 1 0 01-1-1v-6h-6a1 1 0 01-1-1v-2c0-.5.5-1 1-1h6v-6c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v6h6c.5 0 1 .5 1 1zm15 8h-3v-6h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H17c-.6 0-1 .4-1 1v3h-6V9a7 7 0 017-7h26a7 7 0 017 7v26a7 7 0 01-7 7z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-5uggj6s1jkc";
freezeTemplate(tmpl);
