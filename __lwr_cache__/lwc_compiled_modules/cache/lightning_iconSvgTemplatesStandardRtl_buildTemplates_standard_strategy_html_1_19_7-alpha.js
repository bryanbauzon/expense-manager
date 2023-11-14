import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./strategy.css";

import _implicitScopedStylesheets from "./strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M761 408H660a40 40 0 00-40 40v25h-94V276c0-6-6-13-13-13H380v-24a40 40 0 00-40-40H239a40 40 0 00-40 40v101a40 40 0 0040 40h101a40 40 0 0040-40v-24h93v157h-93v-23a40 40 0 00-40-40H239a40 40 0 00-40 40v100a40 40 0 0040 40h101a40 40 0 0040-40v-24h93v157h-93v-23a40 40 0 00-40-40H239a40 40 0 00-40 40v101a40 40 0 0040 40h101a40 40 0 0040-40v-24h133c7 0 13-7 13-13V527h94v22a40 40 0 0040 40h101a40 40 0 0040-40V448a40 40 0 00-40-40zm-421-68H239V239h101v101zm0 20v-20 20zm0 190H239V450h101v100zm0 20v-20 20zm0 191H239V660h101v101zm0 20v-20 20zm421-232H660V448h101v101zm0 20v-20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-q5p34cpkal";
freezeTemplate(tmpl);
