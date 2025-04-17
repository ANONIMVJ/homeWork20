import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout'
import { MainPage, ShippingPage } from './pages'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
