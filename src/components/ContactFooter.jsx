import React, { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { personalInfo, portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function ContactFooter({ onOpenCv }) {
  const [copied, setCopied] = useState(false)
  const { lang } = useLanguage()
  const contact = portfolioContent[lang].contact
  const location = portfolioContent[lang].hero.location

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${personalInfo.email}`
    }
  }

  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0F172A] p-8 text-white shadow-elevated sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-400">
                {contact.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {contact.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {contact.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0D9488] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F766E]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>{contact.copiedEmailBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>
                        {contact.copyEmailBtn} ({personalInfo.email})
                      </span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20-%20Jirath%20Kanaraksanti`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4 text-teal-400" />
                  <span>{contact.sendEmailBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-white"
                >
                  <FileDown className="h-4 w-4 text-teal-400" />
                  <span>{contact.viewCvBtn}</span>
                </button>
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 lg:col-span-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {contact.channelsLabel}
              </p>
              <div className="mt-4 space-y-3.5 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-slate-200 transition-colors hover:border-teal-500/60 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-teal-400" />
                    <span>{personalInfo.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </a>

                <a
                  href={personalInfo.phoneHref}
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-slate-200 transition-colors hover:border-teal-500/60 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-teal-400" />
                    <span>{personalInfo.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </a>

                <div className="flex items-center gap-2.5 rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-slate-300">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span>{location}</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © 2026{' '}
            <span className="font-semibold text-slate-700">
              {lang === 'th' ? personalInfo.thaiName : personalInfo.name}
            </span>
            . {contact.footerNote}
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            {contact.footerBuild}
          </p>
        </div>
      </div>
    </footer>
  )
}
