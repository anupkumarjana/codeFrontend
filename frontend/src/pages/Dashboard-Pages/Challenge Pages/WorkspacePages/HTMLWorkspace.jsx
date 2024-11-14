import React from 'react'
import CodeMirrorWorkspace from "../../../../components/workspace/CodeMirrorWorkspace";
import { HTMLChallengesData } from '../../../../api/HTMLChallengesData';

const HTMLWorkspace = () => {
  return (
     <div><CodeMirrorWorkspace data={HTMLChallengesData} language="html"/></div>
  )
}

export default HTMLWorkspace