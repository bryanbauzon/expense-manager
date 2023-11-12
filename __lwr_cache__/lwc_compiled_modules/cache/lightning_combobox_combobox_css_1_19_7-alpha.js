import stylesheet0 from "lightning/sldsGenAiUtils";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host {" : hostSelector + " {")) + "display: block;}" + ((useActualHostSelector ? ":host.slds-has-error {" : hostSelector + ".slds-has-error {")) + "--slds-c-input-color-border: var(--slds-g-color-error-base-40, #ea001e);--slds-c-input-shadow: var(--slds-g-color-error-base-40, #ea001e) 0 0 0 1px inset;--slds-c-input-color-background: var(--slds-c-input-color-background, var(--sds-c-input-color-background, var(--slds-g-color-neutral-base-100, #fff)));--slds-c-input-text-color: var(--slds-c-input-text-color, var(--sds-c-input-text-color, var(--slds-g-color-neutral-base-10, #747474)));}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet0, stylesheet];