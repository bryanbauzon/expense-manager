import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedUrl.css";

import _implicitScopedStylesheets from "./formattedUrl.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [$cmp.hasValue ? api_element("a", {
    attrs: {
      "href": $cmp.computedUrl,
      "title": $cmp.tooltip,
      "target": $cmp.target,
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_text(api_dynamic_text($cmp.computedLabel))]) : null];
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
tmpl.stylesheetToken = "lwc-6cec4cph6ak";
freezeTemplate(tmpl);
