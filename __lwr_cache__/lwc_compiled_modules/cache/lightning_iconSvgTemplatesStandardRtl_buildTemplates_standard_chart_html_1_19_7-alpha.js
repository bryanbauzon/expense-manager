import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chart.css";

import _implicitScopedStylesheets from "./chart.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M362 564c14 31 39 55 70 70 9 4 13 13 13 22v115c0 16-15 28-31 24a304 304 0 01-214-214c-4-15 8-31 24-31h116c9 0 18 5 22 14zm53-367c15-4 31 8 31 24v115c0 9-5 18-13 22-31 14-55 39-70 70-4 9-13 13-22 13H224c-16 0-28-15-24-31a308 308 0 01215-213zm385 299c0 143-91 264-216 299-15 4-30-8-30-24V654c0-10 5-19 13-24 47-24 80-75 80-134s-33-111-80-134c-8-4-13-14-13-24V221c0-16 15-28 30-24a306 306 0 01216 299z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-noflo7lnsk";
freezeTemplate(tmpl);
