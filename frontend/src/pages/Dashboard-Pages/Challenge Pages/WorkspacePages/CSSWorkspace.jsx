import React from "react";
import CodeMirrorWorkspace from "../../../../components/workspace/CodeMirrorWorkspace";
import { CSSChallengesData } from "../../../../api/CSSChallengesData";

const CSSWorkspace = () => {
  return (
    <div>
      <CodeMirrorWorkspace data={CSSChallengesData} language="css" />
    </div>
  );
};

export default CSSWorkspace;
