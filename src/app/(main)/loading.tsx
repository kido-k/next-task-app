import React from 'react'

function loading() {
  return (
    <div
      className='items flex h-full items-center justify-center'
      aria-label='読み込み中'
    >
      <div className='h-10 w-10 animate-spin rounded-full border-4 border-green-500 border-t-transparent' />
    </div>
  )
}

export default loading
