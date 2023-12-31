import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./coaching.css";

import _implicitScopedStylesheets from "./coaching.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M470 530c-13 0-26 5-35 15-19 19-19 51 0 71 9 9 22 15 35 15s26-5 35-15c19-19 19-51 0-71-9-10-22-15-35-15zm326-224l-68-98c-6-9-18-11-27-6L367 409c-32 19-60 47-78 89-18 43-22 89-11 132-43 4-78 40-78 85a85 85 0 00163 34c77 49 181 40 249-28 61-61 74-152 40-227-12-26-5-58 19-75l121-86c8-5 10-18 4-27zM285 740c-14 0-25-11-25-25s11-25 25-25 25 11 25 25-11 25-25 25zm263-82c-21 21-49 32-78 32s-57-11-78-32c-43-43-43-113 0-156 21-21 48-32 78-32 29 0 57 11 78 32 43 43 43 113 0 156z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4vfmj4n4kvo";
freezeTemplate(tmpl);
