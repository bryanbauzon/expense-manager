import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_workspace.css";

import _implicitScopedStylesheets from "./product_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M152 22a16 16 0 0117 17v11a16 16 0 01-17 17h-51a34 34 0 00-34 32v320a34 34 0 0032 34h320a34 34 0 0034-32v-53a16 16 0 0117-17h11a16 16 0 0117 17v62a68 68 0 01-68 68H90a68 68 0 01-68-68V90a68 68 0 0168-68zm252 232l31-31a10 10 0 000-15L310 82a10 10 0 00-15 0l-31 31a10 10 0 000 15l125 125a10 10 0 0015 1zm70-71l15-15a10 10 0 000-15L365 27a10 10 0 00-15 0l-15 15a10 10 0 000 15l125 126a10 10 0 0014 0zM368 289c6-6 5-11 1-15L244 149a10 10 0 00-15 0l-1 1a10 10 0 000 15l125 125a10 10 0 0015-1zm-44 44l7-7a10 10 0 000-15L207 185a10 10 0 00-15 0l-7 7a10 10 0 000 15l125 125c3 6 9 6 14 1zm-67 68l31-31a10 10 0 000-15L163 229a10 10 0 00-15 0l-31 31a10 10 0 000 15l125 125a10 10 0 0015 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-51k1bil97ri";
freezeTemplate(tmpl);
