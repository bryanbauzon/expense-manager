import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quick_text.css";

import _implicitScopedStylesheets from "./quick_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M261 33C125 33 15 134 15 258c0 39 11 76 30 109 3 5 4 11 2 17l-32 87c-3 8 5 15 13 13l88-34c5-2 11-1 17 2a260 260 0 00129 33c135-1 245-101 245-226S397 33 261 33zM147 250c0-5 4-10 10-10h159c5 0 10 4 10 10v20c0 5-4 10-10 10H156a10 10 0 01-10-10v-20zm229 96c0 5-4 10-10 10H156a10 10 0 01-10-10v-19c0-5 4-10 10-10h210c5 0 10 4 10 10v19zm0-153c0 5-4 10-10 10H156a10 10 0 01-10-10v-19c0-5 4-10 10-10h210c5 0 10 4 10 10v19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33lhmjvv35c";
freezeTemplate(tmpl);
