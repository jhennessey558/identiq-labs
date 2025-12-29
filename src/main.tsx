import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IdentiqLabs from './identiq-labs'
import WhitepaperPage from './whitepaper-page'
import './identiq-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IdentiqLabs />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)