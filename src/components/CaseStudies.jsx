import React from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  Gamepad2,
  Github,
  Globe,
  Maximize2,
  Workflow,
} from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import SystemDiagram from './SystemDiagram'

export default function CaseStudies({ onSelectStudy }) {
  const { lang } = useLanguage()
  const section = portfolioContent[lang].caseStudiesSection
  const studies = portfolioContent[lang].caseStudies

  return (
    <section
      id="case-studies"
      className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
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
          <span className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600 shadow-subtle">
            <Workflow className="h-3.5 w-3.5 text-[#0D9488]" />
            {section.badge}
          </span>
        </div>

        {/* Case Study Cards */}
        <div className="mt-10 space-y-8">
          {studies.map((study) => (
            <article
              key={study.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:border-teal-300 hover:shadow-elevated"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 bg-slate-50/70 px-6 py-5 lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded border border-teal-200 bg-teal-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#0D9488]">
                      {study.code}
                    </span>
                    <span className="font-mono text-xs font-medium text-slate-500">
                      {study.period}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-700">
                      {section.rolePrefix}: {study.role}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                    {study.title}
                  </h3>
                </div>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0D9488] px-4 py-2.5 text-xs font-semibold text-white shadow-subtle transition-colors hover:bg-[#0F766E] sm:text-sm"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{section.openLiveAppBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-85" />
                    </a>
                  )}

                  {study.itchUrl && (
                    <a
                      href={study.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0D9488] px-4 py-2.5 text-xs font-semibold text-white shadow-subtle transition-colors hover:bg-[#0F766E] sm:text-sm"
                    >
                      <Gamepad2 className="h-4 w-4" />
                      <span>{section.playItchBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-85" />
                    </a>
                  )}

                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-subtle transition-colors hover:border-[#0F172A] hover:bg-slate-900 hover:text-white sm:text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>{section.viewGithubBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectStudy(study.id)}
                    className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold shadow-subtle transition-colors sm:text-sm ${
                      study.itchUrl || study.liveUrl
                        ? 'border border-slate-300 bg-[#0F172A] text-white hover:bg-slate-800'
                        : 'bg-[#0D9488] text-white hover:bg-[#0F766E]'
                    }`}
                  >
                    <Maximize2 className="h-4 w-4" />
                    <span>{section.viewArchitectureBtn}</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Problem -> Architecture -> Outcomes 3-Column Breakdown */}
                <div className="grid gap-5 lg:grid-cols-3">
                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <span>{section.problemLabel}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {study.problem}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
                      <Cpu className="h-4 w-4 text-[#0D9488]" />
                      <span>{section.solutionLabel}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {study.solution}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>{section.outcomesLabel}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {study.outcomes}
                    </p>
                  </div>
                </div>

                {/* Interactive Visual System Flow Diagram */}
                <div className="mt-6">
                  <SystemDiagram study={study} compact={true} />
                </div>

                {/* Bottom Footer: Tech Badges + Quick Highlights + Release Link */}
                <div className="mt-5 flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {section.stackLabel}
                    </span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {study.highlights.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-1.5 text-xs"
                      >
                        <span className="text-slate-500">{item.label}:</span>
                        <span className="font-semibold text-slate-900">
                          {item.value}
                        </span>
                      </div>
                    ))}

                    {study.releasesUrl && (
                      <a
                        href={study.releasesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-teal-200 bg-teal-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-teal-800 transition-colors hover:bg-teal-100"
                      >
                        <Download className="h-3 w-3" />
                        <span>{section.viewReleasesBtn}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
