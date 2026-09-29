import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

export default function App() {
  // La ficha vive aqui porque se abre tanto desde la portada como desde la lista
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      <Nav />
      <main>
        <Hero onOpenProject={setSelected} />
        <Projects onOpen={setSelected} />
        <Profile />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={close} />
    </>
  )
}
