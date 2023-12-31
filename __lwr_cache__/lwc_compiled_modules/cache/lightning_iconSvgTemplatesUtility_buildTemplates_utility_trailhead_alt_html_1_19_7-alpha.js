import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead_alt.css";

import _implicitScopedStylesheets from "./trailhead_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M222 362a27 27 0 01-1 3 69 69 0 0024 78c16 13 20 18 18 30a76 76 0 01-11 27 449 449 0 01-232-74v-36l1-27h201zm277 0l1 28v37a450 450 0 01-203 72 100 100 0 005-20c6-37-18-55-32-66a28 28 0 01-11-33 82 82 0 019-17h231zM225 196l44 65-42 60h-87zm35-176a393 393 0 01235 302h-59l-88-130a20 20 0 00-33 0l-22 33-51-76a20 20 0 00-34 0L91 322H25A393 393 0 01260 20zm72 220l55 82H277z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5vichrvsscr";
freezeTemplate(tmpl);
