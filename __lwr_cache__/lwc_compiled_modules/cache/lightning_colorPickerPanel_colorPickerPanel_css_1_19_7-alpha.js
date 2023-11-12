function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host:not([data-render-mode]) .fix-slds-color-picker__selector-footer" : hostSelector + ":not([data-render-mode]) .fix-slds-color-picker__selector-footer")) + shadowSelector + " > lightning-button" + shadowSelector + " {flex: 1;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];