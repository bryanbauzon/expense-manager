import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mixed_sources_mapping.css";

import _implicitScopedStylesheets from "./mixed_sources_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M130.8 97.3a54.3 54.3 0 110-46.5h258.4a54.3 54.3 0 110 46.4H130.8z"${3}/><path fill-rule="evenodd" d="M465.1 208.6a62.1 62.1 0 00-91.8 27.4l-7.7.7H130.8a54.3 54.3 0 100 46.4h139.8c-15.8 17.1-25.2 36.9-33.1 53.4l-1.5 3c-12.2 25.4-21.8 43.5-41.8 55-15.8 9-33.4 14.1-48.6 16.9a62 62 0 102.6 46.6 207 207 0 0069.1-23.3c34-19.4 48.8-50.5 60.5-74.9l.2-.4c12.4-26 21.6-44.6 40.9-56.9a126.5 126.5 0 0149.7-19.6h4.3A61.9 61.9 0 00469 308l.7-.6a61.8 61.8 0 00-4.8-99.2v.4zm-34.5 84a32.5 32.5 0 110-65v65zm-341 178.1a32.5 32.5 0 100-65 32.5 32.5 0 000 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6nj0ejkq1rg";
freezeTemplate(tmpl);
