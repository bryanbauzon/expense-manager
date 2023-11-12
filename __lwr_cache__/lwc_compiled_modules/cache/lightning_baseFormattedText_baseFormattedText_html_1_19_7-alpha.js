import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./baseFormattedText.css";

import _implicitScopedStylesheets from "./baseFormattedText.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  attrs: {
    "dir": "ltr"
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator, f: api_flatten} = $api;
  return api_flatten([!$cmp.shouldFormat ? $cmp.ignoreRTL ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.normalizedValue))]) : null : null, !$cmp.shouldFormat ? !$cmp.ignoreRTL ? api_text(api_dynamic_text($cmp.normalizedValue)) : null : null, api_iterator($cmp.formattedParts, function (part) {
    return [$cmp.shouldFormat ? part.isLink ? api_element("a", {
      attrs: {
        "target": "_blank",
        "href": part.href,
        "rel": "noopener"
      },
      key: api_key(1, part.key)
    }, [api_text(api_dynamic_text(part.value))]) : null : null, $cmp.shouldFormat ? part.isText ? api_text(api_dynamic_text(part.value)) : null : null];
  })]);
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
tmpl.stylesheetToken = "lwc-444t2t1prhe";
freezeTemplate(tmpl);
