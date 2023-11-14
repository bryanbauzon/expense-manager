import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_statement.css";

import _implicitScopedStylesheets from "./medication_statement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M647.3 493.5a16.3 16.3 0 0010-14.8V247.3A48.3 48.3 0 00609 199H298.1a48.2 48.2 0 00-48.1 48.3V653a48.2 48.2 0 0048.2 48.3h158a16.1 16.1 0 0014.5-9.2 108.2 108.2 0 0116.6-22.1l120-142.5a113.4 113.4 0 0140-34zM302.1 336.7a15.2 15.2 0 0115.2-15.2h30.5v-30a15.2 15.2 0 0115.2-14.8h15.2a15.3 15.3 0 0115.2 15.3v29.5h30a15.5 15.5 0 0115.3 15.3V352a15.6 15.6 0 01-15.3 15.3h-30V398a15.2 15.2 0 01-15.2 15.2h-15.3a15.2 15.2 0 01-15.1-15.2v-30h-30.5a15.2 15.2 0 01-15.2-15.2zm191.1 245.1a16.1 16.1 0 01-16.1 16.1H318.2a16.1 16.1 0 01-16.1-16.1v-17.7a16.1 16.1 0 0116.1-16h158.9a16.1 16.1 0 0116.1 16zm81-98.1a16.1 16.1 0 01-16.1 16.3h-240a16.1 16.1 0 01-16.1-16.1v-17.6a16.1 16.1 0 0116.2-16.3h240a16.1 16.1 0 0116.1 16.1zm159.6 54a67.2 67.2 0 00-94 5.4 24.3 24.3 0 00-2 2.5l-50 58.8 100 85.1 50-58.8a65.9 65.9 0 00-4-93zM566.6 631l-50 58.8a66.2 66.2 0 0099.3 87.6l2.1-2.5 50-58.8L568 631z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2c2plmash4r";
freezeTemplate(tmpl);
