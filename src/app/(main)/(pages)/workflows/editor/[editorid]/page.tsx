import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='h-full'> 
    <EditorProvider>
        <ConnectionsProvider>
            <div className=""></div>
        </ConnectionsProvider>
    </EditorProvider>
    </div>
  )
}

export default Page