import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./related_list.css";

import _implicitScopedStylesheets from "./related_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 200H420c-33 0-60 27-60 60v10c0 5 4 10 10 10h290c33 0 60 27 60 60v310c0 5 4 10 10 10 38 0 70-31 70-70V260c0-33-27-60-60-60zM600 340H280c-33 0-60 27-60 60v340c0 33 27 60 60 60h320c33 0 60-27 60-60V400c0-33-27-60-60-60zM480 680c0 11-9 20-20 20H320c-11 0-20-9-20-20v-20c0-11 9-20 20-20h140c11 0 20 9 20 20zm0-100c0 11-9 20-20 20H320c-11 0-20-9-20-20v-20c0-11 9-20 20-20h140c11 0 20 9 20 20zm0-100c0 11-9 20-20 20H320c-11 0-20-9-20-20v-20c0-11 9-20 20-20h140c11 0 20 9 20 20zm100 200c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-100c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-100c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5qsc71agc1e";
freezeTemplate(tmpl);
