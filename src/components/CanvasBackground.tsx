import { useRef, useEffect } from 'react'
import { Circle, CircleType } from '@/utils/canvasBall'
import './canvasBackground.css'

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let currentCircle: CircleType = new Circle(-1, -1, 8)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const w = canvas.width = window.innerWidth
    const h = canvas.height = window.innerHeight
    let circles: CircleType[] = []

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h)
        circles[i].drawCircle(ctx)

        for (let j = i + 1; j < circles.length; j++) {
          circles[i].drawLine(ctx, circles[j])
        }
      }
      if (currentCircle.x > 0 && currentCircle.y > 0) {
        currentCircle.drawCircle(ctx)
        for (let k = 0; k < circles.length; k++) {
          currentCircle.drawLine(ctx, circles[k])
        }
      }
      window.requestAnimationFrame(draw)
    }
    function init(num: number) {
      for (let i = 0; i < num; i++) {
        const c: CircleType = new Circle(Math.random() * w, Math.random() * h)
        circles.push(c)
      }
      draw()
    }
    init(60)
  }, [])


  return (
    <canvas
      ref={canvasRef}
      className="canvas-bg"
      onMouseMove={(e) => {
        currentCircle.x = e.clientX
        currentCircle.y = e.clientY
      }}
      onMouseOut={() => {
        currentCircle.x = -1
        currentCircle.y = -1
      }}
    ></canvas>
  )
}

export default CanvasBackground
