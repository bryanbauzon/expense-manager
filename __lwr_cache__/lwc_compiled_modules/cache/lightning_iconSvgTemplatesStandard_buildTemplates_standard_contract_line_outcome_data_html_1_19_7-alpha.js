import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome_data.css";

import _implicitScopedStylesheets from "./contract_line_outcome_data.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M743.1 415.4h-148a63.5 63.5 0 01-63.4-63.4V204c0-11.6-9.5-21.1-21.1-21.1H299.2a63.5 63.5 0 00-63.4 63.4v507.4a63.5 63.5 0 0063.4 63.4h229.1a204.4 204.4 0 01-46.9-126.8H444a21.2 21.2 0 01-21.1-21.1v-21.1c0-11.6 9.5-21.1 21.1-21.1h46.2c7-23.1 18-44.5 32.2-63.4H444a21.2 21.2 0 01-21.1-21.1v-21.1c0-11.6 9.5-21.1 21.1-21.1h157a205 205 0 01163.3-3.5v-60c0-11.6-9.5-21.1-21.1-21.1zM337.2 691.3c-18 0-32.8-14.8-32.8-32.8s14.8-32.8 32.8-32.8 32.8 14.8 32.8 32.8-14.8 32.8-32.8 32.8zM749.4 352h-112c-23.3 0-42.3-19-42.3-42.3v-112c0-8.5 6.3-14.8 14.8-14.8a14 14 0 0110.6 4.2L760 326.6c3.2 3.2 4.2 6.3 4.2 10.6 0 8.5-6.3 14.8-14.8 14.8zM337.2 564.5c-18 0-32.8-14.8-32.8-32.8s14.8-32.8 32.8-32.8 32.8 14.8 32.8 32.8c0 19-14.8 32.8-32.8 32.8zm5.3-143.8l46.5-24.3c1.1-1.1 3.2-1.1 4.2 0l46.5 24.3c3.2 2.1 7.4-1.1 6.3-4.2l-8.5-51.8c0-2.1 0-3.2 1.1-4.2l38.1-37c3.2-2.1 1.1-6.3-2.1-7.4l-51.8-7.4c-1.1 0-2.1-1.1-3.2-2.1L396.3 259c-2.1-3.2-6.3-3.2-8.5 0l-23.3 47.6c0 1.1-2.1 2.1-3.2 2.1l-51.8 7.4c-3.2 1.1-5.3 5.3-4.2 7.4l38.1 37c1.1 1.1 1.1 3.2 1.1 4.2l-8.5 51.8c-1.1 3.2 3.2 6.3 6.3 4.2zm493.2 265.8a149.2 149.2 0 11-298.4 0 149.2 149.2 0 01298.4 0zm-61.9-50.9c7.5 7 7.9 18.8.9 26.4l-56 59.7a18.8 18.8 0 01-27.5-.2l-24.1-26.6L625 737a18.6 18.6 0 11-26.4-26.4l56-56a18.7 18.7 0 0127 .6l23.7 26.1 42.1-44.9c7-7.5 18.9-7.9 26.4-.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6r1hge9scig";
freezeTemplate(tmpl);
