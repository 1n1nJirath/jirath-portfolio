import React, { useEffect } from 'react'
import { FileText, Printer, X } from 'lucide-react'
import { personalInfo, portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const DEFAULT_TITLE =
  'Jirath Kanaraksanti — System Analyst | Business Analyst | AI Workflow Architect'

export default function CvModal({ open, onClose }) {
  const { lang } = useLanguage()
  const content = portfolioContent[lang]
  const cv = content.cv
  const education = content.educationSkills.education
  const skillCategories = content.educationSkills.skillCategories
  const leadership = content.leadership

  const cvFileBaseName =
    lang === 'th' ? personalInfo.cvFileNameTh : personalInfo.cvFileNameEn

  useEffect(() => {
    if (!open) {
      document.title = DEFAULT_TITLE
      return
    }

    document.title = cvFileBaseName
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.title = DEFAULT_TITLE
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose, cvFileBaseName])

  const handlePrint = () => {
    document.title = cvFileBaseName
    window.print()
  }

  if (!open) return null

  return (
    <div
      className="cv-print-root fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="cv-print-dialog flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Toolbar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">
          <div>
            <h3 id="cv-modal-title" className="text-sm font-bold text-slate-900">
              {cv.titlePrefix} —{' '}
              {lang === 'th' ? personalInfo.thaiName : personalInfo.name}
            </h3>
            <p className="text-xs text-slate-500">{cv.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-slate-600 sm:inline-flex">
              <FileText className="h-3.5 w-3.5 text-[#0D9488]" />
              {cvFileBaseName}.pdf
            </span>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#0F766E]"
            >
              <Printer className="h-4 w-4" />
              <span>{cv.printBtn}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close CV Modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Single-Page A4 CV Sheet */}
        <div className="cv-print-scroll overflow-y-auto bg-slate-100/70 p-3 sm:p-6">
          <div
            id="cv-printable-sheet"
            className="mx-auto max-w-[210mm] rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-card sm:p-7"
          >
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-2.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                  {lang === 'th' ? personalInfo.thaiName : personalInfo.name}
                </h1>
                <span className="font-mono text-[11px] font-medium text-slate-500">
                  {lang === 'th' ? personalInfo.name : personalInfo.thaiName}
                </span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-[#0D9488]">
                {content.hero.headline}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-0.5 text-[10.5px] text-slate-600">
                <span>{content.hero.location}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span>{personalInfo.email}</span>
                <span>•</span>
                <span>github.com/1n1nJirath</span>
                <span>•</span>
                <span>linkedin.com/in/jirathkana</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-2.5">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {cv.summaryTitle}
              </h2>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-700">
                {content.hero.subHeadline} {content.hero.positioningNote}
              </p>
            </div>

            {/* Education */}
            <div className="mt-2.5">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {cv.educationTitle}
              </h2>
              <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-xs font-bold text-slate-900">
                  {education.degree} —{' '}
                  <span className="font-medium text-slate-700">
                    {education.institution}
                  </span>
                </p>
                <span className="font-mono text-[10.5px] text-slate-600">
                  {education.graduated}
                </span>
              </div>
              <p className="mt-0.5 text-[10.5px] leading-snug text-slate-600">
                <span className="font-semibold text-slate-700">
                  {cv.courseworkPrefix}
                </span>{' '}
                {education.coursework.join(' • ')}
              </p>
            </div>

            {/* Featured Systems & Case Studies */}
            <div className="mt-2.5">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {cv.projectsTitle}
              </h2>
              <div className="mt-1 space-y-2">
                {content.caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="border-l-2 border-teal-500/70 pl-2.5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xs font-bold text-slate-900">
                        {study.title}
                      </h3>
                      <span className="font-mono text-[10px] text-slate-500">
                        {study.period}
                      </span>
                    </div>
                    <p className="text-[10.5px] font-semibold text-[#0D9488]">
                      {study.role} | {study.techStack.join(' • ')}
                    </p>
                    <ul className="mt-0.5 list-disc space-y-0.5 pl-3.5 text-[10.5px] leading-snug text-slate-700">
                      <li>
                        <span className="font-semibold">{cv.solutionPrefix}</span>{' '}
                        {study.solution}
                      </li>
                      <li>
                        <span className="font-semibold">{cv.outcomesPrefix}</span>{' '}
                        {study.outcomes}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="mt-2.5">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {cv.leadershipTitle}
              </h2>
              <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xs font-bold text-slate-900">
                  {leadership.role} —{' '}
                  <span className="font-medium text-slate-700">
                    {leadership.organization}
                  </span>
                </h3>
                <span className="font-mono text-[10px] text-slate-500">
                  {leadership.period}
                </span>
              </div>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-3.5 text-[10.5px] leading-snug text-slate-700">
                {leadership.achievements.map((item) => (
                  <li key={item.title}>{item.detail}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-2.5 border-t border-slate-200 pt-2">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {cv.skillsTitle}
              </h2>
              <div className="mt-1 space-y-0.5 text-[10.5px] leading-snug text-slate-700">
                {skillCategories.map((cat) => (
                  <p key={cat.id}>
                    <span className="font-bold text-slate-900">{cat.title}:</span>{' '}
                    {cat.skills.join(' • ')}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
