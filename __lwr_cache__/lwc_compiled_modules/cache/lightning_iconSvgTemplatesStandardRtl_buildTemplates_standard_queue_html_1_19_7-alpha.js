import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./queue.css";

import _implicitScopedStylesheets from "./queue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g transform="scale(10)"${3}><path d="M67.6 20.1c-2.9 0-5.4 2.1-6.4 5a14 14 0 017.7 9.9c3.1-.7 5.4-3.7 5.4-7.3 0-4.3-3-7.6-6.7-7.6zm6.2 17.8a9 9 0 01-4.7 2.3c-.3 2.7-1.3 5.2-2.8 7.2h11.1c1.4 0 2.5-1.1 2.5-2.5v-1.2c0-2.7-3-4.4-6.1-5.8zM63.2 50c-2 1.8-4.5 2.9-7.2 2.9-.2 3.1-1.1 5.9-2.5 8.3h14a3 3 0 003-3V57c-.1-3.3-3.7-5.3-7.3-7zM50.3 65.2A14.8 14.8 0 0129 65c-4.6 2.2-9 5-9 9.1V76c0 2.2 1.8 3.9 3.9 3.9h31.3c2.2 0 3.9-1.8 3.9-3.9v-1.8c0-4.2-4.2-6.9-8.8-9z"${3}/><path d="M55.7 29.5A8 8 0 0048 36c3.7 2.4 6.4 6.5 7.5 11.2h.2c4.4 0 8-4 8-8.9.1-4.8-3.5-8.8-8-8.8z"${3}/><ellipse cx="39.6" cy="51.6" rx="10.7" ry="11.8"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-qpj22imeo7";
freezeTemplate(tmpl);
