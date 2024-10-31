import React from "react";
import { JavaScriptChallengesData } from "../../../../api/JavaScriptChallengesData";
import Workspace from "../../../../components/workspace/Workspace";
const JavaScriptWorkspace = () => {
  return <div><Workspace data={JavaScriptChallengesData} language="javascript"/></div>;
};

export default JavaScriptWorkspace;
