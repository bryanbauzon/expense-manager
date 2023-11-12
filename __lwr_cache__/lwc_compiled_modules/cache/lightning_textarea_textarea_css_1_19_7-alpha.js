import stylesheet0 from "lightning/sldsGenAiUtils";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host,textarea" : hostSelector + ",textarea")) + shadowSelector + " {display: block;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet0, stylesheet];