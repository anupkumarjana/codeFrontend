import React from 'react'
import { ReactChallengesData } from '../../../../api/ReactChallengesData'
import Workspace from '../../../../components/workspace/Workspace'

const ReactWorkSpace = () => {
  return (
    <div>
        <Workspace data={ReactChallengesData} language="react"/>
    </div>
  )
}

export default ReactWorkSpace