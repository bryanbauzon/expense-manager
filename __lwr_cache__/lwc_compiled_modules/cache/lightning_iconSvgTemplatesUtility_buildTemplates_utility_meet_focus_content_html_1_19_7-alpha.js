import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_focus_content.css";

import _implicitScopedStylesheets from "./meet_focus_content.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M99 274a43 43 0 0143 43v4a45 45 0 01-14 33 25 25 0 00-10 18c0 6 3 12 15 19l13 5c18 9 34 18 35 37a24 24 0 01-21 22H41a24 24 0 01-23-24c0-17 15-28 34-36l7-3 3-2c16-6 18-12 18-18a27 27 0 00-9-18 45 45 0 01-15-34 43 43 0 0140-46zM461 75a36 36 0 0137 36v272a36 36 0 01-37 36H206a54 54 0 00-26-36h272a9 9 0 009-9V138a9 9 0 00-9-9H89a9 9 0 00-9 9v111a65 65 0 00-36 24V111a36 36 0 0136-36z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7segj5m9sqh";
freezeTemplate(tmpl);
