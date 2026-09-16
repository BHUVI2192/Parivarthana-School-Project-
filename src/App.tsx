import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutOSNTPage from './pages/AboutOSNTPage'
import AboutParivarthanaPage from './pages/AboutParivarthanaPage'
import AdmissionsPage from './pages/AdmissionsPage'
import LeadershipPage from './pages/LeadershipPage'
import SchoolPage from './pages/SchoolPage'
import PUCPage from './pages/PUCPage'
import CampusLifePage from './pages/CampusLifePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AnalyticsPage from './pages/AnalyticsPage'
import NewsEventsPage from './pages/NewsEventsPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'
import VirtualTourPage from './pages/VirtualTourPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/360virtualtour" element={<VirtualTourPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-osnt" element={<AboutOSNTPage />} />
          <Route path="about-parivarthana" element={<AboutParivarthanaPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="school" element={<SchoolPage />} />
          <Route path="puc" element={<PUCPage />} />
          <Route path="campus-life" element={<CampusLifePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="news-events" element={<NewsEventsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
