import React from 'react'
import { Spin } from 'antd'

const Loading = ({ loading = false, className = '' }: { loading: boolean; className?: string }) => {
  return loading ? (
    <div className={`flex justify-center items-center ${className}`}>
      <Spin fullscreen={true} size='large' />
    </div>
  ) : (
    <></>
  )
}

export default Loading
