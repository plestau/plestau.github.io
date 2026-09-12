import { useEffect, useRef } from 'react'

/**
 * Fondo animado: particulas a la deriva unidas por lineas cuando se acercan,
 * con un halo que sigue al raton. Se pausa si el usuario prefiere menos
 * movimiento o si la pestana no esta visible.
 */
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles = []
    let raf = null
    const pointer = { x: -9999, y: -9999 }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(Math.floor((width * height) / 16000), 90)
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const near = dx * dx + dy * dy < 150 * 150

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = near ? 'rgba(34,211,238,0.75)' : 'rgba(150,160,190,0.30)'
        ctx.fill()
      }

      // Lineas entre particulas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(dist2) / 120) * 0.18
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(120,140,200,${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    const onPointerMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onVisibility = () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf)
        raf = null
      } else if (!raf && !reduced) {
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    document.addEventListener('visibilitychange', onVisibility)

    if (reduced) {
      draw()
      if (raf) cancelAnimationFrame(raf)
      raf = null
    } else {
      raf = requestAnimationFrame(draw)
    }

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-cyan/12 blur-[130px] animate-float" />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-violet/12 blur-[140px] animate-float"
        style={{ animationDelay: '2.5s' }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
    </div>
  )
}
