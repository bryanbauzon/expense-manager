import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./input.css";

import _implicitScopedStylesheets from "./input.scoped.css?scoped=true";

import _lightningPrimitiveInputSimple from "lightning/primitiveInputSimple";
import _lightningPrimitiveInputToggle from "lightning/primitiveInputToggle";
import _lightningPrimitiveInputCheckbox from "lightning/primitiveInputCheckbox";
import _lightningPrimitiveInputCheckboxButton from "lightning/primitiveInputCheckboxButton";
import _lightningPrimitiveInputRadio from "lightning/primitiveInputRadio";
import _lightningPrimitiveInputFile from "lightning/primitiveInputFile";
import _lightningPrimitiveInputColor from "lightning/primitiveInputColor";
import _lightningDatepicker from "lightning/datepicker";
import _lightningTimepicker from "lightning/timepicker";
import _lightningDatetimepicker from "lightning/datetimepicker";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18, _m19, _m20, _m21, _m22, _m23, _m24, _m25, _m26, _m27, _m28, _m29, _m30, _m31, _m32} = $ctx;
  return [$cmp.isTypeSimple ? api_custom_element("lightning-primitive-input-simple", _lightningPrimitiveInputSimple, {
    props: {
      "accessKey": $cmp.accesskey,
      "ariaErrorMessage": api_scoped_id("help-message"),
      "ariaHasPopup": $cmp.ariaHasPopup,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "ariaLabel": $cmp.computedAriaLabel,
      "autocomplete": $cmp.autocomplete,
      "computedLabelClass": $cmp.computedLabelClass,
      "disabled": $cmp.disabled,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "formatter": $cmp.formatter,
      "formatFractionDigits": $cmp.formatFractionDigits,
      "hasExternalLabel": $cmp.hasExternalLabel,
      "helptextAlternativeText": $cmp.helptextAlternativeText,
      "helpMessage": $cmp._helpMessage,
      "isLoading": $cmp.isLoading,
      "label": $cmp.label,
      "max": $cmp.normalizedMax,
      "maxLength": $cmp.maxLength,
      "min": $cmp.normalizedMin,
      "minLength": $cmp.minLength,
      "name": $cmp.name,
      "pattern": $cmp.pattern,
      "placeholder": $cmp.placeholder,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "step": $cmp.step,
      "type": $cmp.type,
      "timezone": $cmp.timezone,
      "variant": $cmp.variant,
      "value": $cmp.value,
      "validity": $cmp.validity
    },
    key: 0,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handlePrimitiveInputSimpleChange)),
      "commit": _m3 || ($ctx._m3 = api_bind($cmp.handleCommit))
    }
  }) : null, $cmp.isTypeToggle ? api_custom_element("lightning-primitive-input-toggle", _lightningPrimitiveInputToggle, {
    props: {
      "accessKey": $cmp.accesskey,
      "ariaLabel": $cmp.computedAriaLabel,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "checked": $cmp.checked,
      "disabled": $cmp.disabled,
      "helpMessage": $cmp._helpMessage,
      "label": $cmp.label,
      "messageToggleActive": $cmp.messageToggleActive,
      "messageToggleInactive": $cmp.messageToggleInactive,
      "name": $cmp.name,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "value": $cmp.value,
      "variant": $cmp.variant
    },
    key: 1,
    on: {
      "blur": _m4 || ($ctx._m4 = api_bind($cmp.handleBlur)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.handleChange)),
      "focus": _m6 || ($ctx._m6 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeCheckbox ? api_custom_element("lightning-primitive-input-checkbox", _lightningPrimitiveInputCheckbox, {
    props: {
      "accessKey": $cmp.accesskey,
      "ariaLabel": $cmp.computedAriaLabel,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "checked": $cmp.checked,
      "disabled": $cmp.disabled,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "helpMessage": $cmp._helpMessage,
      "helptextAlternativeText": $cmp.helptextAlternativeText,
      "label": $cmp.label,
      "labelHidden": $cmp.labelHidden,
      "name": $cmp.name,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "variant": $cmp.variant
    },
    key: 2,
    on: {
      "blur": _m7 || ($ctx._m7 = api_bind($cmp.handleBlur)),
      "change": _m8 || ($ctx._m8 = api_bind($cmp.handleChange)),
      "focus": _m9 || ($ctx._m9 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeCheckboxButton ? api_custom_element("lightning-primitive-input-checkbox-button", _lightningPrimitiveInputCheckboxButton, {
    props: {
      "label": $cmp.label,
      "ariaLabel": $cmp.ariaLabel,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "required": $cmp.required,
      "accessKey": $cmp.accesskey,
      "disabled": $cmp.disabled,
      "name": $cmp.name,
      "readOnly": $cmp.readOnly,
      "checked": $cmp.checked,
      "helpMessage": $cmp._helpMessage
    },
    key: 3,
    on: {
      "blur": _m10 || ($ctx._m10 = api_bind($cmp.handleBlur)),
      "focus": _m11 || ($ctx._m11 = api_bind($cmp.handleFocus)),
      "change": _m12 || ($ctx._m12 = api_bind($cmp.handleChange))
    }
  }) : null, $cmp.isTypeRadio ? api_custom_element("lightning-primitive-input-radio", _lightningPrimitiveInputRadio, {
    props: {
      "accessKey": $cmp.accesskey,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "ariaLabel": $cmp.ariaLabel,
      "disabled": $cmp.disabled,
      "helpMessage": $cmp._helpMessage,
      "label": $cmp.label,
      "name": $cmp.name,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "variant": $cmp.variant
    },
    key: 4,
    on: {
      "blur": _m13 || ($ctx._m13 = api_bind($cmp.handleBlur)),
      "change": _m14 || ($ctx._m14 = api_bind($cmp.handleChange)),
      "focus": _m15 || ($ctx._m15 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeFile ? api_custom_element("lightning-primitive-input-file", _lightningPrimitiveInputFile, {
    props: {
      "accept": $cmp.accept,
      "accessKey": $cmp.accesskey,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "ariaLabel": $cmp.computedAriaLabel,
      "disabled": $cmp.disabled,
      "helpMessage": $cmp._helpMessage,
      "label": $cmp.label,
      "labelClass": $cmp.computedLabelClass,
      "multiple": $cmp.multiple,
      "name": $cmp.name,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required
    },
    key: 5,
    on: {
      "reportvalidity": _m16 || ($ctx._m16 = api_bind($cmp.reportValidity)),
      "blur": _m17 || ($ctx._m17 = api_bind($cmp.handleBlur)),
      "focus": _m18 || ($ctx._m18 = api_bind($cmp.handleFocus)),
      "change": _m19 || ($ctx._m19 = api_bind($cmp.handlePrimitiveInputFileChange))
    }
  }) : null, $cmp.isTypeColor ? api_custom_element("lightning-primitive-input-color", _lightningPrimitiveInputColor, {
    props: {
      "label": $cmp.label,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "helpMessage": $cmp._helpMessage,
      "helptextAlternativeText": $cmp.helptextAlternativeText,
      "hasExternalLabel": $cmp.hasExternalLabel,
      "required": $cmp.required,
      "accessKey": $cmp.accesskey,
      "disabled": $cmp.disabled,
      "name": $cmp.name,
      "autocomplete": $cmp.autocomplete,
      "placeholder": $cmp.placeholder,
      "pattern": $cmp.pattern,
      "ariaLabel": $cmp.ariaLabel,
      "ariaInvalid": $cmp.computedAriaInvalid,
      "value": $cmp.value,
      "variant": $cmp.variant
    },
    key: 6,
    on: {
      "blur": _m20 || ($ctx._m20 = api_bind($cmp.handleBlur)),
      "commit": _m21 || ($ctx._m21 = api_bind($cmp.handleCommit)),
      "focus": _m22 || ($ctx._m22 = api_bind($cmp.handleFocus)),
      "change": _m23 || ($ctx._m23 = api_bind($cmp.handleChange))
    }
  }) : null, $cmp.isTypeDesktopDate ? api_custom_element("lightning-datepicker", _lightningDatepicker, {
    props: {
      "max": $cmp.max,
      "min": $cmp.min,
      "label": $cmp.label,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "ariaLabel": $cmp.ariaLabel,
      "dateStyle": $cmp.dateStyle,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "autocomplete": $cmp.autocomplete,
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled,
      "rootAriaNode": $cmp.templateRootNode
    },
    key: 7,
    on: {
      "change": _m24 || ($ctx._m24 = api_bind($cmp.handleChange)),
      "blur": _m25 || ($ctx._m25 = api_bind($cmp.handleBlur)),
      "focus": _m26 || ($ctx._m26 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeDesktopTime ? api_custom_element("lightning-timepicker", _lightningTimepicker, {
    props: {
      "max": $cmp.max,
      "min": $cmp.min,
      "label": $cmp.label,
      "name": $cmp.name,
      "ariaLabel": $cmp.ariaLabel,
      "variant": $cmp.variant,
      "timeStyle": $cmp.timeStyle,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "autocomplete": $cmp.autocomplete,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled,
      "rootAriaNode": $cmp.templateRootNode
    },
    key: 8,
    on: {
      "change": _m27 || ($ctx._m27 = api_bind($cmp.handleChange)),
      "blur": _m28 || ($ctx._m28 = api_bind($cmp.handleBlur)),
      "focus": _m29 || ($ctx._m29 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeDesktopDateTime ? api_custom_element("lightning-datetimepicker", _lightningDatetimepicker, {
    props: {
      "dateAriaControls": $cmp.dateAriaControls,
      "dateAriaLabel": $cmp.dateAriaLabel,
      "dateAriaLabelledBy": $cmp.dateAriaLabelledBy,
      "dateAriaDescribedBy": $cmp.dateAriaDescribedBy,
      "dateStyle": $cmp.dateStyle,
      "timeStyle": $cmp.timeStyle,
      "timeAriaControls": $cmp.timeAriaControls,
      "timeAriaLabel": $cmp.timeAriaLabel,
      "timeAriaLabelledBy": $cmp.timeAriaLabelledBy,
      "timeAriaDescribedBy": $cmp.timeAriaDescribedBy,
      "max": $cmp.max,
      "min": $cmp.min,
      "timezone": $cmp.timezone,
      "label": $cmp.label,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "autocomplete": $cmp.autocomplete,
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled,
      "rootAriaNode": $cmp.templateRootNode
    },
    key: 9,
    on: {
      "change": _m30 || ($ctx._m30 = api_bind($cmp.handleChange)),
      "blur": _m31 || ($ctx._m31 = api_bind($cmp.handleBlur)),
      "focus": _m32 || ($ctx._m32 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.shouldShowHelpMessage ? api_element("div", {
    className: $cmp.computedHelpMessageClass,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 10
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null];
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
tmpl.stylesheetToken = "lwc-66unc5l95ad";
freezeTemplate(tmpl);
