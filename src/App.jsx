import React, { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Competencies from './components/Competencies'
import CaseStudies from './components/CaseStudies'
import Leadership from './components/Leadership'
import EducationSkills from './components/EducationSkills'
import ContactFooter from './components/ContactFooter'
import ArchitectureModal from './components/ArchitectureModal'
import CvModal from './components/CvModal'

export default function App() {
  const [activeStudyId, setActiveStudyId] = useState(null)
  const [cvModalOpen, setCvModalOpen] = useState(false)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        <div className="no-print">
          <Navbar onOpenCv={() => setCvModalOpen(true)} />

          <main>
            <Hero />
            <Competencies />
            <CaseStudies onSelectStudy={(studyId) => setActiveStudyId(studyId)} />
            <Leadership />
            <EducationSkills />
          </main>

          <ContactFooter onOpenCv={() => setCvModalOpen(true)} />

          <ArchitectureModal
            studyId={activeStudyId}
            onClose={() => setActiveStudyId(null)}
          />
        </div>

        <CvModal
          open={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  )
}
