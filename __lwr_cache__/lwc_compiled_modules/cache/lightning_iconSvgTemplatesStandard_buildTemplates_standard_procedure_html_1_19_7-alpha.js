import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./procedure.css";

import _implicitScopedStylesheets from "./procedure.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72 25h-2a1 1 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a1 1 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zM28 53.9v-2.1a2 2 0 012-2h3.2v-3.2a2 2 0 012-2h2.1a2 2 0 012.1 2v3.1h3.1a2 2 0 012 2V54a2 2 0 01-2 2h-3.1v3a2 2 0 01-2 2.1h-2.2a2 2 0 01-2-2v-3.2H30a2 2 0 01-2.1-2zm43.7 17.8a1.3 1.3 0 01-1.4 1.3H29.4a1.3 1.3 0 01-1.3-1.3V69a1.3 1.3 0 011.3-1.3h41a1.3 1.3 0 011.3 1.3zm0-11.7a1.3 1.3 0 01-1.4 1.4h-20a1.3 1.3 0 01-1.4-1.4v-2.6a1.3 1.3 0 011.3-1.4h20.1a1.3 1.3 0 011.4 1.3zm0-11.6a1.3 1.3 0 01-1.4 1.3H50.4a1.3 1.3 0 01-1.3-1.3v-2.7a1.3 1.3 0 011.3-1.3h20a1.3 1.3 0 011.3 1.3zM39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6n65dg6ubia";
freezeTemplate(tmpl);
