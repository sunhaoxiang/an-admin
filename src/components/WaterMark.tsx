import React from 'react'
import type { ReactNode } from 'react'

interface SvgBackProps {
  text?: string
}

type WaterMarkProps = {
  children: ReactNode
} & SvgBackProps

function SvgBack(props: SvgBackProps) {
  const style = {
    fontSize: '20px',
    fillOpacity: 0.1,
    fillColor: '#000',
  }

  const { text = 'Water Mark' } = props
  const res = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="300px" height="300px" viewBox="0 0 300 300">
    <text x="10" y="10" font-size="20" transform="rotate(35 0 0)" fill-opacity="${style.fillOpacity}" fillColor="${style.fillColor}">${text}</text>
  </svg>`
  const blob = new Blob([res], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  return <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 9,
      pointerEvents: 'none',
      backgroundImage: `url(${url})`,
    }}
  >

  </div>
}

function WaterMark(props: WaterMarkProps) {
  const { children, text } = props

  return <div style={{
    width: '100%',
    height: '100%',
    position: 'relative',
  }}>
    {children}
    <SvgBack text={text} />
  </div>
}

export default WaterMark
