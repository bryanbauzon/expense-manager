import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_template.css";

import _implicitScopedStylesheets from "./entitlement_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M705 195H338c-37 1-68 32-69 69h-23c-25 0-46 21-46 46v1c0 25 20 46 45 46h24v93h-23c-25 0-46 21-46 46s21 46 46 46h23v93h-23c-25 0-46 20-46 46 0 25 20 46 45 46h24c0 46 32 69 69 69h367c38-1 68-31 69-69V264c-1-38-31-68-69-69zm-33 451H367V346h305zM420 451h199c4 0 8-3 8-7v-46c0-4-3-8-7-8H420c-4 0-8 3-8 7v46c0 4 3 8 7 8zm0 150h46c4 0 8-3 8-7v-91c0-4-3-8-7-8h-47c-4 0-8 3-8 7v91c0 4 3 8 7 8zm198-105h-92c-4 0-8 3-8 7v91c0 4 3 8 7 8h93c4 0 8-3 8-7v-91c0-4-3-8-7-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qcll12kd7k";
freezeTemplate(tmpl);
