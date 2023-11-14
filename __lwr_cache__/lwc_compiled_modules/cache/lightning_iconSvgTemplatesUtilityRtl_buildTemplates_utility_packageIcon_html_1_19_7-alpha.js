import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./packageIcon.css";

import _implicitScopedStylesheets from "./packageIcon.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 240h-79l-33 40h108v60H80v-60h107l-33-40H76c-20 0-36 16-36 36v194a30 30 0 0030 30h380a30 30 0 0030-30V276c0-20-16-36-36-36zM230 35v125h-69c-10 0-15 9-9 14l100 123c4 3 10 3 14 0l100-123c6-6 1-14-9-14h-67V35c0-8-7-15-15-15h-30c-8 0-15 7-15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5k8o0bsd3vj";
freezeTemplate(tmpl);
