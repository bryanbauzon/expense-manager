import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./instore_locations.css";

import _implicitScopedStylesheets from "./instore_locations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M321 701c-6 0-12-5-12-12v-73c0-6 5-12 12-12h75c6 0 12 5 12 12v74c0 6-5 12-12 12h-75zm142 0c-6 0-12-5-12-12V577c0-6 5-12 12-12h75c6 0 12 5 12 12v113c0 6-5 12-12 12h-75zm142 0c-6 0-12-5-12-12v-73c0-6 5-12 12-12h75c6 0 12 5 12 12v74c0 6-5 12-12 12h-75zM321 429c-6 0-12-5-12-12V311c0-6 5-12 12-12h217c6 0 12 5 12 12v107c0 6-5 12-12 12H321zm284 0c-6 0-12-5-12-12v-73c0-6 5-12 12-12h75c6 0 12 5 12 12v73c0 6-5 12-12 12zm133-229H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm0 517c0 12-9 21-21 21H283c-11 0-21-9-21-21V527h476zm0-250H262V283c0-12 9-21 21-21h434c11 0 21 9 21 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74nd2apu4l7";
freezeTemplate(tmpl);
