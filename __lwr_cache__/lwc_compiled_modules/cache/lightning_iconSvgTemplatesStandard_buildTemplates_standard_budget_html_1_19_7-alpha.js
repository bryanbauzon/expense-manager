import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget.css";

import _implicitScopedStylesheets from "./budget.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M756 200H244a19 19 0 00-19 19v62a19 19 0 0019 19h512a19 19 0 0019-19v-62a19 19 0 00-19-19zM356 350H244a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H444a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H644a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zM356 475H244a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H444a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H644a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zM356 600H244a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H444a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H644a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zM356 725H244a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H444a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19zm200 0H644a19 19 0 00-19 19v37a19 19 0 0019 19h112a19 19 0 0019-19v-37a19 19 0 00-19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ebvhet95tn";
freezeTemplate(tmpl);
