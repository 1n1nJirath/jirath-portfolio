import React, { useEffect, useState } from 'react'
import {
  CheckCircle2,
  Database,
  ExternalLink,
  Gamepad2,
  Github,
  Globe,
  Layers,
  ShieldCheck,
  Workflow,
  X,
} from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import SystemDiagram from './SystemDiagram'

export default function ArchitectureModal({ studyId, onClose }) {
  const [activeTab, setActiveTab] = useState('diagram')
  const { lang } = useLanguage()
  const ui = portfolioContent[lang].caseStudiesSection
  const study =
    portfolioContent[lang].caseStudies.find((item) => item.id === studyId) || null

  const tabs = [
    { id: 'diagram', label: ui.modalTabs.diagram, icon: Workflow },
    { id: 'contracts', label: ui.modalTabs.contracts, icon: Database },
    { id: 'risks', label: ui.modalTabs.risks, icon: ShieldCheck },
  ]

  useEffect(() => {
    setActiveTab('diagram')
  }, [studyId])

  useEffect(() => {
    if (!study) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [study, onClose])

  if (!study) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-study-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-50/80 px-5 py-4 sm:px-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-teal-200 bg-teal-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#0D9488]">
                {study.code}
              </span>
              <span className="font-mono text-xs text-slate-500">
                {study.period}
              </span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span className="text-xs font-medium text-slate-600">
                {ui.rolePrefix}: {study.role}
              </span>
            </div>
            <h3
              id="modal-study-title"
              className="mt-1.5 text-lg font-bold text-slate-900 sm:text-xl"
            >
              {study.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close Architecture Modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-200 bg-white px-5 sm:px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? 'border-[#0D9488] text-[#0D9488]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {activeTab === 'diagram' && (
            <div>
              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {ui.problemLabel}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {study.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-700">
                    {ui.solutionLabel}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {study.solution}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                    {ui.outcomesLabel}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {study.outcomes}
                  </p>
                </div>
              </div>

              <SystemDiagram study={study} compact={false} />
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Layers className="h-4 w-4 text-[#0D9488]" />
                <span>{ui.contractsNote}</span>
              </div>
              <div className="space-y-3">
                {study.specs.map((spec) => (
                  <div
                    key={spec.layer}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {spec.layer}
                      </h4>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800">
                        <CheckCircle2 className="h-3 w-3" />
                        {spec.guarantee}
                      </span>
                    </div>
                    <p className="mt-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-700">
                      {spec.contract}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'risks' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600">{ui.risksNote}</p>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                  <thead className="bg-slate-50 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-4 py-3">{ui.riskHeaders.risk}</th>
                      <th className="px-4 py-3">{ui.riskHeaders.impact}</th>
                      <th className="px-4 py-3">{ui.riskHeaders.mitigation}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {study.risks.map((row) => (
                      <tr key={row.risk} className="align-top">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {row.risk}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {row.impact}
                        </td>
                        <td className="px-4 py-3 text-teal-800">
                          {row.mitigation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-5 py-3.5 sm:px-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0F766E]"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{ui.openLiveAppBtn}</span>
                <ExternalLink className="h-3 w-3 opacity-85" />
              </a>
            )}
            {study.itchUrl && (
              <a
                href={study.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0F766E]"
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                <span>{ui.playItchBtn}</span>
                <ExternalLink className="h-3 w-3 opacity-85" />
              </a>
            )}
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                <Github className="h-3.5 w-3.5" />
                <span>{ui.viewGithubBtn}</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
            >
              {ui.modalClose}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
