import React, { useEffect, Component } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components'
import Feedbacks from './components/Feedbacks'
// import { Analytics } from "@vercel/analytics/react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', color: '#aaa', textAlign: 'center', fontSize: '0.85rem' }}>
          {this.props.fallback || 'Section unavailable.'}
        </div>
      )
    }
    return this.props.children
  }
}

const OTUWebring = () => {
  useEffect(() => {
    let hostname = window.location.hostname
    if (hostname.startsWith('www.')) {
      hostname = hostname.substring(4)
    }

    const prevLink = document.getElementById('webring-prev')
    const nextLink = document.getElementById('webring-next')

    if (prevLink) {
      prevLink.href = 'https://otu-ring.com/prev.html?from=' + encodeURIComponent(hostname)
    }
    if (nextLink) {
      nextLink.href = 'https://otu-ring.com/next.html?from=' + encodeURIComponent(hostname)
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '0.5rem 0',
        marginTop: '-3rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <a
        id="webring-prev"
        href="#"
        title="Previous site"
        style={{
          color: '#71717a',
          fontSize: '16px',
          textDecoration: 'none',
          padding: '0.5rem',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          background: 'transparent',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#fafafa'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.backgroundColor = 'transparent' }}
      >
        &larr;
      </a>
      <a href="https://otu-ring.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://otu-ring.com/assets/ontariotech.svg"
          alt="OTU Webring"
          style={{ height: '20px', width: 'auto', opacity: 0.7, transition: 'opacity 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
        />
      </a>
      <a
        id="webring-next"
        href="#"
        title="Next site"
        style={{
          color: '#71717a',
          fontSize: '16px',
          textDecoration: 'none',
          padding: '0.5rem',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          background: 'transparent',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.backgroundColor = 'transparent' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.backgroundColor = 'transparent' }}
      >
        &rarr;
      </a>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden w-full max-w-[100vw]'>
        <div className="div bg-cover bg-no-repeat bg-center">
          <ErrorBoundary><Navbar /></ErrorBoundary>
          <ErrorBoundary><Hero /></ErrorBoundary>
        </div>
        <ErrorBoundary><About /></ErrorBoundary>
        <ErrorBoundary><Education /></ErrorBoundary>
        <ErrorBoundary><Experience /></ErrorBoundary>
        <ErrorBoundary><Extracurricular /></ErrorBoundary>
        <ErrorBoundary><Tech /></ErrorBoundary>
        <ErrorBoundary><Works /></ErrorBoundary>
        <ErrorBoundary><Footer /></ErrorBoundary>
        <ErrorBoundary><StarsCanvas /></ErrorBoundary>
      </div>
    </BrowserRouter>
  )
}

export default App
