import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle.css";

import _implicitScopedStylesheets from "./toggle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M392 20H124C66 22 20 69 20 128s46 106 104 108h268c59 0 108-48 108-108S452 20 392 20zM127 188c-33 0-60-27-60-60s27-60 60-60 60 27 60 60-27 60-60 60zm265 97H124c-58 2-104 49-104 107s46 106 104 108h268c60 0 108-48 108-108s-48-107-108-107zm4 184H123c-40-2-72-35-72-76s32-74 72-76h273c40 2 72 35 72 76s-32 74-72 76z"${3}/><circle cx="392" cy="392" r="52"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-de7qtsh4cl";
freezeTemplate(tmpl);
