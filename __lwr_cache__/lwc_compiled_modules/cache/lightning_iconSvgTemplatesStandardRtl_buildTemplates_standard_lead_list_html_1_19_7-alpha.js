import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_list.css";

import _implicitScopedStylesheets from "./lead_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62.9 64.3v4a2 2 0 01-2 2H21a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h39.9a2 2 0 012 2zm9.9 6c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2zm0-17.9c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2zm0-17.9c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2zm-9.9 11.9v4a2 2 0 01-2 2H25.8a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h35.1a2 2 0 012 2zm0-17.8v4a2 2 0 01-2 2H21a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h39.9a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6pc6ec1tu23";
freezeTemplate(tmpl);
