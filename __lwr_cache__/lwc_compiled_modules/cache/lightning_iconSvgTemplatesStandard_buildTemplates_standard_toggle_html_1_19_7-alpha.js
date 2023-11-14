import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle.css";

import _implicitScopedStylesheets from "./toggle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 333.4a134.3 134.3 0 01130-134.3h335.6a134.5 134.5 0 010 268.9H330a134.4 134.4 0 01-130-134.6zm134.4 75.3a75.3 75.3 0 10-75.2-75.3 75.8 75.8 0 0075.2 75.3zM200 664.6A134.4 134.4 0 01330 530h335.6a134.5 134.5 0 010 268.9H330a134.3 134.3 0 01-130-134.3zM670.6 570H329.4a95.3 95.3 0 000 190h341.2a95.3 95.3 0 000-190zm-5 160a65.3 65.3 0 1165.2-65.2 65.8 65.8 0 01-65.2 65.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4qeej4nbuef";
freezeTemplate(tmpl);
