import React, { useState } from 'react'
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { personalInfo, portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const { lang } = useLanguage()
  const hero = portfolioContent[lang].hero

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${personalInfo.email}`
    }
  }

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] bg-tech-grid">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column — Value Proposition */}
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-3.5 py-1.5 text-xs font-medium text-teal-800 shadow-subtle">
              <span className="h-2 w-2 rounded-full bg-[#0D9488]" />
              <span>{hero.availability}</span>
            </div>

            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-teal-700">
              {hero.eyebrow}
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.subHeadline}
            </p>

            {/* Explicit SA/BA Positioning Callout */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-subtle">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0D9488]">
                <Workflow className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {hero.positioningLabel}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                  {hero.positioningNote}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-subtle transition-all hover:border-teal-600 hover:text-teal-700"
              >
                <Mail className="h-4 w-4" />
                <span>{hero.secondaryCta}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-3 font-mono text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-white hover:text-slate-900"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#0D9488]" />
                    <span className="text-[#0D9488]">{hero.copiedText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Social Quick Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-teal-600" />
                {hero.location}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-[#0D9488]"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/1n1nJirath</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-[#0D9488]"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>linkedin.com/in/jirathkana</span>
              </a>
            </div>
          </div>

          {/* Right Column — Visual System Blueprint Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-elevated sm:p-6">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                    {hero.blueprintEyebrow}
                  </span>
                  <h2 className="mt-0.5 text-sm font-bold text-slate-900">
                    {hero.blueprintTitle}
                  </h2>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-[11px] font-medium text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {hero.blueprintBadge}
                </span>
              </div>

              {/* 4-Stage Pipeline */}
              <div className="mt-5 space-y-3">
                {hero.executionFramework.map((item, idx) => (
                  <div key={item.step} className="relative">
                    <div className="group rounded-xl border border-slate-200/90 bg-slate-50/60 p-3.5 transition-colors hover:border-teal-300 hover:bg-teal-50/30">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 font-mono text-[11px] font-semibold text-white group-hover:bg-[#0D9488]">
                            {item.step}
                          </span>
                          <div>
                            <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500">
                              {item.phase}
                            </p>
                            <h3 className="text-sm font-semibold text-slate-900">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <span className="shrink-0 rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600">
                          {item.artifact}
                        </span>
                      </div>
                      <p className="mt-2 pl-8 text-xs leading-relaxed text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                    {idx < hero.executionFramework.length - 1 && (
                      <div className="flex justify-start py-0.5 pl-6">
                        <div className="h-2.5 w-px bg-teal-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Metrics Footer */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-slate-50 p-2.5 text-center"
                  >
                    <p className="font-mono text-sm font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-tight text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
