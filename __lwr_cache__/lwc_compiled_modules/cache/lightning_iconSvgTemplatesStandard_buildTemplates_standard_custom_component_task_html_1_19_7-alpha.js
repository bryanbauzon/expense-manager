import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom_component_task.css";

import _implicitScopedStylesheets from "./custom_component_task.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 506l-49-49a14 14 0 00-20 0l-19 20a13 13 0 000 19l69 68a27 27 0 0020 9 27 27 0 0019-9l141-141a13 13 0 000-20l-19-20a13 13 0 00-20 0zm219 36a233 233 0 000-86l46-39a43 43 0 0010-53l-20-35a41 41 0 00-36-20 32 32 0 00-14 3l-58 21a224 224 0 00-74-43l-10-59a39 39 0 00-41-31h-40a39 39 0 00-41 31l-10 58a216 216 0 00-75 43l-59-21a70 70 0 00-14-3 42 42 0 00-36 20l-20 35a42 42 0 0010 53l46 39a209 209 0 00-4 43 202 202 0 004 43l-46 39a43 43 0 00-10 53l20 35a41 41 0 0036 20 32 32 0 0014-3l58-21a224 224 0 0074 43l10 60a41 41 0 0041 34h40a42 42 0 0041-35l10-60a221 221 0 0078-46l54 21a80 80 0 0015 3 42 42 0 0036-20l19-33a37 37 0 00-8-50zm-34-94l-45 46v8a139 139 0 11-67-119l24-24a48 48 0 0169 0l20 20a49 49 0 0114 37 47 47 0 01-15 32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37gimabas3c";
freezeTemplate(tmpl);
