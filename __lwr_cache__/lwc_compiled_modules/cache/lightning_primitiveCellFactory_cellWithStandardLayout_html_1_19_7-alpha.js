import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cellWithStandardLayout.css";

import _implicitScopedStylesheets from "./cellWithStandardLayout.scoped.css?scoped=true";

import _lightningPrimitiveTreegridCellToggle from "lightning/primitiveTreegridCellToggle";
import _lightningIcon from "lightning/icon";
import _lightningPrimitiveCellActions from "lightning/primitiveCellActions";
import _lightningPrimitiveCellButton from "lightning/primitiveCellButton";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningFormattedNumber from "lightning/formattedNumber";
import _lightningPrimitiveCustomCell from "lightning/primitiveCustomCell";
import _lightningFormattedDateTime from "lightning/formattedDateTime";
import _lightningFormattedEmail from "lightning/formattedEmail";
import _lightningFormattedLocation from "lightning/formattedLocation";
import _lightningFormattedPhone from "lightning/formattedPhone";
import _lightningFormattedLookup from "lightning/formattedLookup";
import _lightningPrimitiveDatatableTooltip from "lightning/primitiveDatatableTooltip";
import _lightningBaseFormattedText from "lightning/baseFormattedText";
import _lightningFormattedUrl from "lightning/formattedUrl";
import {registerTemplate} from "lwc";
const stc0 = {
  "data-navigation": "enable"
};
const stc1 = {
  "slds-m-right_x-small": true
};
const stc2 = {
  "data-navigation": "enable",
  "data-action-triggers": "enter,space"
};
const stc3 = {
  props: {
    "size": "x-small",
    "iconName": "utility:check"
  },
  key: 7
};
const stc4 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 8
};
const stc5 = {
  "data-navigation": "enable",
  "data-action-triggers": "enter"
};
const stc6 = {
  "slds-m-horizontal_xxx-small": true
};
const stc7 = {
  "slds-row-number": true,
  "slds-text-body_small": true,
  "slds-text-color_weak": true
};
const stc8 = {
  "slds-m-left_x-small": true,
  "slds-m-right_x-small": true
};
const stc9 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-cell-edit__button": true,
  "slds-m-left_x-small": true
};
const stc10 = {
  props: {
    "iconName": "utility:edit",
    "size": "xx-small",
    "svgClass": "slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small slds-button__icon_edit"
  },
  key: 25
};
const stc11 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 26
};
const stc12 = {
  props: {
    "iconName": "utility:lock",
    "size": "xx-small",
    "svgClass": "slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
  },
  key: 27
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("span", {
    className: $cmp.computedWrapperClass,
    key: 0
  }, [api_element("div", {
    className: $cmp.computedCellDivClass,
    style: $cmp.computedCssStyles,
    key: 1
  }, [$cmp.hasTreeData ? api_custom_element("lightning-primitive-treegrid-cell-toggle", _lightningPrimitiveTreegridCellToggle, {
    attrs: stc0,
    props: {
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "displayValue": $cmp.displayValue,
      "value": $cmp.value,
      "hasChildren": $cmp.typeAttribute21,
      "isExpanded": $cmp.typeAttribute22,
      "tabIndex": api_tab_index($cmp.internalTabIndex)
    },
    key: 2
  }) : null, $cmp.hasLeftIcon ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc1,
    props: {
      "iconName": $cmp.iconName,
      "size": "x-small",
      "alternativeText": $cmp.iconAlternativeText
    },
    key: 3
  }) : null, $cmp.hasLeftIcon ? api_text(api_dynamic_text($cmp.iconLabel)) : null, $cmp.isAction ? api_custom_element("lightning-primitive-cell-actions", _lightningPrimitiveCellActions, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc2,
    props: {
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "internalTabIndex": $cmp.internalTabIndex,
      "menuAlignment": $cmp.typeAttribute0,
      "rowActions": $cmp.typeAttribute1
    },
    key: 4
  }) : null, $cmp.isButton ? api_custom_element("lightning-primitive-cell-button", _lightningPrimitiveCellButton, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc2,
    props: {
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "variant": $cmp.typeAttribute0,
      "label": $cmp.typeAttribute1,
      "iconName": $cmp.typeAttribute2,
      "iconPosition": $cmp.typeAttribute3,
      "disabled": $cmp.typeAttribute4,
      "buttonName": $cmp.typeAttribute5,
      "buttonClass": $cmp.typeAttribute6,
      "buttonTitle": $cmp.typeAttribute7,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "internalTabIndex": $cmp.internalTabIndex
    },
    key: 5
  }) : null, $cmp.isButtonIcon ? api_custom_element("lightning-primitive-cell-button", _lightningPrimitiveCellButton, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc2,
    props: {
      "type": "button-icon",
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "variant": $cmp.typeAttribute0,
      "alternativeText": $cmp.typeAttribute1,
      "iconName": $cmp.typeAttribute2,
      "iconClass": $cmp.typeAttribute3,
      "disabled": $cmp.typeAttribute4,
      "buttonName": $cmp.typeAttribute5,
      "buttonClass": $cmp.typeAttribute6,
      "buttonTitle": $cmp.typeAttribute7,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "internalTabIndex": $cmp.internalTabIndex
    },
    key: 6
  }) : null, $cmp.isBoolean ? $cmp.isChecked ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc3) : null : null, $cmp.isBoolean ? api_element("span", stc4, [api_text(api_dynamic_text($cmp.booleanCellAssistiveText))]) : null, $cmp.isCurrency ? api_custom_element("lightning-formatted-number", _lightningFormattedNumber, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.value,
      "formatStyle": "currency",
      "currencyCode": $cmp.typeAttribute0,
      "currencyDisplayAs": $cmp.typeAttribute1,
      "minimumIntegerDigits": $cmp.typeAttribute2,
      "minimumFractionDigits": $cmp.typeAttribute3,
      "maximumFractionDigits": $cmp.typeAttribute4,
      "minimumSignificantDigits": $cmp.typeAttribute5,
      "maximumSignificantDigits": $cmp.typeAttribute6
    },
    key: 9
  }) : null, $cmp.isCustomType ? api_custom_element("lightning-primitive-custom-cell", _lightningPrimitiveCustomCell, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "types": $cmp.types,
      "keyboardMode": $cmp.keyboardMode,
      "columnType": $cmp.columnType,
      "columnSubType": $cmp.columnSubType,
      "value": $cmp.value,
      "editable": $cmp.editable,
      "internalTabIndex": $cmp.internalTabIndex,
      "rowKeyValue": $cmp.rowKeyValue,
      "colKeyValue": $cmp.colKeyValue,
      "wrapText": $cmp.wrapText,
      "alignment": $cmp.alignment,
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
    key: 10
  }) : null, $cmp.isDateTime ? api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.dateValue,
      "day": $cmp.typeAttribute0,
      "era": $cmp.typeAttribute1,
      "hour": $cmp.typeAttribute2,
      "hour12": $cmp.typeAttribute3,
      "minute": $cmp.typeAttribute4,
      "month": $cmp.typeAttribute5,
      "second": $cmp.typeAttribute6,
      "timeZone": $cmp.typeAttribute7,
      "timeZoneName": $cmp.typeAttribute8,
      "weekday": $cmp.typeAttribute9,
      "year": $cmp.typeAttribute10
    },
    key: 11
  }) : null, $cmp.isDateLocal ? api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.value,
      "day": $cmp.computedDateLocalDay,
      "month": $cmp.computedDateLocalMonth,
      "year": $cmp.computedDateLocalYear,
      "timeZone": "UTC"
    },
    key: 12
  }) : null, $cmp.isEmail ? api_custom_element("lightning-formatted-email", _lightningFormattedEmail, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc5,
    props: {
      "value": $cmp.value,
      "tabIndex": api_tab_index($cmp.internalTabIndex)
    },
    key: 13
  }) : null, $cmp.isLocation ? api_custom_element("lightning-formatted-location", _lightningFormattedLocation, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "latitude": $cmp.value.latitude,
      "longitude": $cmp.value.longitude
    },
    key: 14
  }) : null, $cmp.isNumber ? api_custom_element("lightning-formatted-number", _lightningFormattedNumber, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.value,
      "minimumIntegerDigits": $cmp.typeAttribute0,
      "minimumFractionDigits": $cmp.typeAttribute1,
      "maximumFractionDigits": $cmp.typeAttribute2,
      "minimumSignificantDigits": $cmp.typeAttribute3,
      "maximumSignificantDigits": $cmp.typeAttribute4
    },
    key: 15
  }) : null, $cmp.isPercent ? api_custom_element("lightning-formatted-number", _lightningFormattedNumber, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.value,
      "formatStyle": "percent",
      "minimumIntegerDigits": $cmp.typeAttribute0,
      "minimumFractionDigits": $cmp.typeAttribute1,
      "maximumFractionDigits": $cmp.typeAttribute2,
      "minimumSignificantDigits": $cmp.typeAttribute3,
      "maximumSignificantDigits": $cmp.typeAttribute4
    },
    key: 16
  }) : null, $cmp.isPhone ? api_custom_element("lightning-formatted-phone", _lightningFormattedPhone, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc5,
    props: {
      "value": $cmp.value,
      "tabIndex": api_tab_index($cmp.internalTabIndex)
    },
    key: 17
  }) : null, $cmp.isReference ? api_custom_element("lightning-formatted-lookup", _lightningFormattedLookup, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc5,
    props: {
      "recordId": $cmp.value,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "displayValue": $cmp.typeAttribute0
    },
    key: 18
  }) : null, $cmp.isRowNumber ? $cmp._rowHasError ? api_custom_element("lightning-primitive-datatable-tooltip", _lightningPrimitiveDatatableTooltip, {
    classMap: stc6,
    attrs: stc2,
    props: {
      "size": "xx-small",
      "header": $cmp.typeAttribute0.title,
      "content": $cmp.typeAttribute0.messages,
      "variant": "error",
      "internalTabIndex": $cmp.internalTabIndex,
      "alternativeText": $cmp.typeAttribute0.alternativeText
    },
    key: 19
  }) : null : null, $cmp.isRowNumber ? api_element("span", {
    classMap: stc7,
    style: $cmp.computedRowNumberStyle,
    key: 20
  }) : null, $cmp.isText ? api_custom_element("lightning-base-formatted-text", _lightningBaseFormattedText, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    props: {
      "value": $cmp.value,
      "linkify": $cmp.typeAttribute0
    },
    key: 21
  }) : null, $cmp.isUrl ? api_custom_element("lightning-formatted-url", _lightningFormattedUrl, {
    className: $cmp.computedMarginClassWhenLeftIconExists,
    attrs: stc5,
    props: {
      "value": $cmp.value,
      "tooltip": $cmp.urlTooltip,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "label": $cmp.typeAttribute0,
      "target": $cmp.urlTarget
    },
    key: 22
  }) : null, $cmp.hasRightIcon ? api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc8,
    props: {
      "iconName": $cmp.iconName,
      "size": "x-small",
      "alternativeText": $cmp.iconAlternativeText
    },
    key: 23
  }) : null, $cmp.hasRightIcon ? api_text(api_dynamic_text($cmp.iconLabel)) : null]), $cmp.isEditable ? api_element("button", {
    classMap: stc9,
    attrs: {
      "tabindex": api_tab_index($cmp.internalTabIndex),
      "data-navigation": "enable",
      "data-action-triggers": "enter,space",
      "data-action-edit": "true"
    },
    key: 24,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleEditButtonClick))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc10), api_element("span", stc11, [api_text(api_dynamic_text($cmp.editIconAssistiveText))])]) : null, $cmp.shouldDisplayReadOnlyIcon ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc12) : null])];
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
tmpl.stylesheetToken = "lwc-f1qthpifoh";
freezeTemplate(tmpl);
