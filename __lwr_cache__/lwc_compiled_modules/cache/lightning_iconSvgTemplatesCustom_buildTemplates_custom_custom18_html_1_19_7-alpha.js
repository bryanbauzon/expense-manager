import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom18.css";

import _implicitScopedStylesheets from "./custom18.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M600 360h106c8 0 14-6 14-14 0-4-1-7-4-10L584 204c-3-3-6-4-10-4-8 0-14 6-14 14v106c0 22 18 40 40 40zm234 136l-12-12c-8-8-20-8-28 0L640 639v37c0 3 0 5 3 5h33l4-1 154-154c8-10 8-22 0-30zM709 740h-91c-21 0-38-17-38-38v-70c0-11 3-21 11-28l123-124c4-4 6-9 6-14v-26c0-11-9-20-20-20H560c-33 0-60-27-60-60V220c0-11-9-20-20-20H280c-33 0-60 27-60 60v480c0 33 27 60 60 60h380c29 0 54-21 59-48 1-6-4-12-10-12zM300 380c0-11 9-20 20-20h80c11 0 20 9 20 20v20c0 11-9 20-20 20h-80c-11 0-20-9-20-20zm200 260c0 11-9 20-20 20H320c-11 0-20-9-20-20v-20c0-11 9-20 20-20h160c11 0 20 9 20 20zm40-120c0 11-9 20-20 20H320c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lf2d6pub6j";
freezeTemplate(tmpl);
