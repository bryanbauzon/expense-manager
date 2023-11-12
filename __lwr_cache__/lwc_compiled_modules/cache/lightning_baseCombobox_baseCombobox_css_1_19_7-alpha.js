function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-inline-logo" + shadowSelector + " {height: 1rem;margin-top: 1rem;margin-bottom: 1rem;}input[aria-readonly='true']" + shadowSelector + " {caret-color: transparent;}button:disabled" + shadowSelector + ",[type='button']:disabled" + shadowSelector + " {cursor: not-allowed;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];