import React, { useEffect } from 'react'
import { Printer, X } from 'lucide-react'
import { personalInfo, portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function CvModal({ open, onClose }) {
  const { lang } = useLanguage()
  const content = portfolioContent[lang]
  const cv = content.cv
  const education = content.educationSkills.education
  const skillCategories = content.educationSkills.skillCategories
  const leadership = content.leadership

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Toolbar */}
        <div className="no-print flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3.5">
          <div>
            <h3 id="cv-modal-title" className="text-sm font-bold text-slate-900">
              {cv.titlePrefix} — {personalInfo.name}
            </h3>
            <p className="text-xs text-slate-500">{cv.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
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

        {/* Printable CV Sheet */}
        <div className="overflow-y-auto bg-slate-100/70 p-4 sm:p-8">
          <div
            id="cv-printable-sheet"
            className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-card sm:p-10"
          >
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                {lang === 'th' ? personalInfo.thaiName : personalInfo.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-[#0D9488]">
                {content.hero.headline}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
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
            <div className="mt-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                {cv.summaryTitle}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
                {content.hero.subHeadline} {content.hero.positioningNote}
              </p>
            </div>

            {/* Education */}
            <div className="mt-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                {cv.educationTitle}
              </h2>
              <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-bold text-slate-900">
                  {education.degree}
                </p>
                <span className="font-mono text-xs text-slate-600">
                  {education.graduated}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700">
                {education.institution}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                <span className="font-semibold">{cv.courseworkPrefix}</span>{' '}
                {education.coursework.join(', ')}
              </p>
            </div>

            {/* Featured Systems & Case Studies */}
            <div className="mt-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                {cv.projectsTitle}
              </h2>
              <div className="mt-2 space-y-3.5">
                {content.caseStudies.map((study) => (
                  <div key={study.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {study.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">
                        {study.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#0D9488]">
                      {study.role} | {study.techStack.join(' • ')}
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-700">
                      <li>
                        <span className="font-semibold">{cv.problemPrefix}</span>{' '}
                        {study.problem}
                      </li>
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
            <div className="mt-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                {cv.leadershipTitle}
              </h2>
              <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900">
                  {leadership.role} — {leadership.organization}
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {leadership.period}
                </span>
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-700">
                {leadership.achievements.map((item) => (
                  <li key={item.title}>{item.detail}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                {cv.skillsTitle}
              </h2>
              <div className="mt-2 space-y-1.5 text-xs text-slate-700">
                {skillCategories.map((cat) => (
                  <p key={cat.id}>
                    <span className="font-bold text-slate-900">{cat.title}:</span>{' '}
                    {cat.skills.join(', ')}
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
