import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom82.css";

import _implicitScopedStylesheets from "./custom82.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 44H59a2 2 0 00-2 2v1a3 3 0 11-6 0v-1a2 2 0 00-2-2h-5 .1a17 17 0 00-13.8 8.6 9 9 0 100 16.8A17 17 0 0044.1 78 17 17 0 0062 61l-.1-1.8a2 2 0 011.6-2.2l16.9-3.7a2 2 0 001.6-2V46a2 2 0 00-2-2zM27 64c-1.7 0-3-1.3-3-3s1.3-3 3-3c.4 0 .9.1 1.2.3-.2 1.2-.2 2.5-.2 3.8l.2 1.6zm27-27a3 3 0 003-3v-9c0-1.7-1.3-3-3-3s-3 1.3-3 3v9a3 3 0 003 3zm-14.3 1c.6.7 1.4 1 2.3 1a3 3 0 002-.7 3 3 0 00.3-4.2l-6-7a3 3 0 00-4.2-.3 3 3 0 00-.3 4.2zM66 39c.8 0 1.7-.4 2.3-1l6-7a3 3 0 00-4.5-3.9l-6 7a3 3 0 00.3 4.2c.5.5 1.2.7 1.9.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-liti92f2ee";
freezeTemplate(tmpl);
