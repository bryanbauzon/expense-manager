import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom24.css";

import _implicitScopedStylesheets from "./custom24.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68.1 20H31.9a6 6 0 00-5.9 5.9v.1c0 1.1.9 2 2 2h44a2 2 0 002-2v-.1a6 6 0 00-5.9-5.9zM68 34H32a2 2 0 00-2 2v42c0 1.1.9 2 2 2h11.1c1.1 0 1.9-.9 1.9-2v-8c0-1.1 1-2 2.1-2h5.8c1.1 0 2.1.9 2.1 2v8c0 1.1.8 2 1.9 2H68a2 2 0 002-2V36a2 2 0 00-2-2zM47 61a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4zm0-14a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4zm14 14a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4zm0-14a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7iccn5n5kjb";
freezeTemplate(tmpl);
