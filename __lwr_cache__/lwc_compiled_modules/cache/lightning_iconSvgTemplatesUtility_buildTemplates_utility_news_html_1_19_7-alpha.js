import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./news.css";

import _implicitScopedStylesheets from "./news.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.5 6h-41C8.7 6 8 6.7 8 7.5V38a2 2 0 01-2.3 2c-1-.2-1.7-1.1-1.7-2.1V16c0-.6-.4-1-1-1H1.5c-.8 0-1.5.7-1.5 1.5V42a4 4 0 004 4h44a4 4 0 004-4V7.5c0-.8-.7-1.5-1.5-1.5zM28 35c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1zm18 8c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h30c.6 0 1 .4 1 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-703bsp8m60r";
freezeTemplate(tmpl);
