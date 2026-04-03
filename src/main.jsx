import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import profile from './config/profile'

const upsertMeta = (selector, attrs) => {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }
  Object.entries(attrs).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })
}

const applySeo = () => {
  document.title = profile.seo.title

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: profile.seo.description,
  })
  upsertMeta('meta[name="keywords"]', {
    name: 'keywords',
    content: profile.seo.keywords,
  })
  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: profile.seo.title,
  })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: profile.seo.description,
  })
  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: profile.seo.ogImage,
  })
  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: profile.seo.title,
  })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: profile.seo.description,
  })
  upsertMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: profile.seo.ogImage,
  })
}

applySeo()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* To use vercel analytics in layout */}
  </React.StrictMode>,
)
