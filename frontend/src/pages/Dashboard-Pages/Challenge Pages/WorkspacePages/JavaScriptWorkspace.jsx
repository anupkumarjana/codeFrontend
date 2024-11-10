import React from "react";
import { JavaScriptChallengesData } from "../../../../api/JavaScriptChallengesData";
import CodeMirrorWorkspace from "../../../../components/workspace/CodeMirrorWorkspace";

const JavaScriptWorkspace = () => {
  return <div><CodeMirrorWorkspace data={JavaScriptChallengesData} language="javascript"/></div>;
};

export default JavaScriptWorkspace;
