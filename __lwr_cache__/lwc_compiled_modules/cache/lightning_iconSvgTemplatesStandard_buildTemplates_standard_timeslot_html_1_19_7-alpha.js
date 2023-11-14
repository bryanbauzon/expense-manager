import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./timeslot.css";

import _implicitScopedStylesheets from "./timeslot.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M710 200H292a79 79 0 00-80 78v444a79 79 0 0079 78h419a79 79 0 0078-78V278a77 77 0 00-78-78zM318 330a27 27 0 0126-26h133a27 27 0 0126 26v26a27 27 0 01-26 26H344a27 27 0 01-26-26zm362 340a27 27 0 01-26 26H522a27 27 0 01-26-26v-26a27 27 0 0126-26h133a26 26 0 0125 26zm5-124a28 28 0 01-27 26H344a27 27 0 01-26-26v-91a27 27 0 0126-26h315a27 27 0 0126 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5r5793cdvm7";
freezeTemplate(tmpl);
