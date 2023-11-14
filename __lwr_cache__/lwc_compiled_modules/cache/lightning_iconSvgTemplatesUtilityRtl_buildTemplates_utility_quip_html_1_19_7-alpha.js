import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip.css";

import _implicitScopedStylesheets from "./quip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M245 21C125 28 28 125 21 245 11 383 122 500 260 500h240V260c0-138-117-249-255-239zm-99 134c0-9 7-16 16-16h196c9 0 16 7 16 16v16c0 9-7 16-16 16H161c-9 0-16-7-16-16 1 1 1-16 1-16zm228 208c0 9-7 16-16 16H161c-9 0-16-7-16-16v-16c0-9 7-16 16-16h196c9 0 16 7 16 16v16h1zm60-95c0 9-7 16-16 16H101c-9 0-16-7-16-16v-16c0-9 7-16 16-16h317c9 0 16 7 16 16v16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hl3nop5qp1";
freezeTemplate(tmpl);
