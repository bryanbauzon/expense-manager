import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bareCustomCell.css";

import _implicitScopedStylesheets from "./bareCustomCell.scoped.css?scoped=true";

import _lightningPrimitiveCustomCell from "lightning/primitiveCustomCell";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedCellDivClass,
    style: $cmp.computedCssStyles,
    key: 0
  }, [api_custom_element("lightning-primitive-custom-cell", _lightningPrimitiveCustomCell, {
    props: {
      "types": $cmp.types,
      "keyboardMode": $cmp.keyboardMode,
      "columnType": $cmp.columnType,
      "columnSubType": $cmp.columnSubType,
      "wrapText": $cmp.wrapText,
      "alignment": $cmp.alignment,
      "value": $cmp.value,
      "editable": $cmp.editable,
      "internalTabIndex": $cmp.internalTabIndex,
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "typeAttribute0": $cmp.typeAttribute0,
      "typeAttribute1": $cmp.typeAttribute1,
      "typeAttribute2": $cmp.typeAttribute2,
      "typeAttribute3": $cmp.typeAttribute3,
      "typeAttribute4": $cmp.typeAttribute4,
      "typeAttribute5": $cmp.typeAttribute5,
      "typeAttribute6": $cmp.typeAttribute6,
      "typeAttribute7": $cmp.typeAttribute7,
      "typeAttribute8": $cmp.typeAttribute8,
      "typeAttribute9": $cmp.typeAttribute9,
      "typeAttribute10": $cmp.typeAttribute10
    },
    key: 1
  })])];
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
tmpl.stylesheetToken = "lwc-4u45tg7447m";
freezeTemplate(tmpl);
