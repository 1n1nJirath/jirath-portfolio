import React, { useState } from 'react'
import {
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  GraduationCap,
} from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const categoryIconMap = {
  'analysis-design': Compass,
  'pm-operations': Briefcase,
  'technical-literacy': Code2,
}

export default function EducationSkills() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { lang } = useLanguage()
  const section = portfolioContent[lang].educationSkills

  const visibleCategories =
    activeFilter === 'all'
      ? section.skillCategories
      : section.skillCategories.filter((cat) => cat.id === activeFilter)

  return (
    <section
      id="skills"
      className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0D9488]">
            {section.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {section.subtitle}
          </p>
        </div>

        {/* Education Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-[#0D9488]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                  {section.degreeEyebrow}
                </span>
                <h3 className="mt-0.5 text-lg font-bold text-slate-900 sm:text-xl">
                  {section.education.degree}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-slate-600">
                  {section.education.institution}
                </p>
              </div>
            </div>

            <span className="inline-flex w-fit items-center rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-800">
              {section.education.graduated}
            </span>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <BookOpen className="h-3.5 w-3.5 text-[#0D9488]" />
              <span>{section.courseworkLabel}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {section.education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Filter Bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h3 className="text-lg font-bold text-slate-900">
            {section.matrixTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#0F172A] text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {section.allDomainsBtn}
            </button>
            {section.skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeFilter === cat.id
                    ? 'bg-[#0D9488] text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div
          className={`mt-5 grid gap-6 ${
            visibleCategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'
          }`}
        >
          {visibleCategories.map((category) => {
            const Icon = categoryIconMap[category.id] || Compass
            return (
              <div
                key={category.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-subtle"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-[#0D9488]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {category.title}
                    </h4>
                    <p className="text-xs text-slate-500">{category.subtitle}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-800 transition-colors hover:border-teal-300 hover:bg-teal-50/60 hover:text-teal-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
