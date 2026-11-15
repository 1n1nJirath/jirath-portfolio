import React, { useState } from 'react'
import { FileDown, Globe, Menu, X } from 'lucide-react'
import { personalInfo, portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ onOpenCv }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const content = portfolioContent[lang]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none sm:gap-3"
          aria-label="Jirath Kanaraksanti Home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-600/20 bg-teal-600 text-xs font-bold tracking-wider text-white shadow-subtle transition-transform group-hover:scale-[1.03]">
            {personalInfo.initials}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] font-medium text-slate-500 sm:text-[11px]">
              {content.nav.roleSubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Language Toggle + Download CV */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Segmented EN | TH Language Switcher */}
          <div
            className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100/90 p-0.5 shadow-subtle"
            role="group"
            aria-label="Language Switcher"
          >
            <Globe className="ml-1.5 mr-1 hidden h-3.5 w-3.5 text-slate-500 sm:block" />
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-md px-2 py-1 font-mono text-xs font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('th')}
              className={`rounded-md px-2 py-1 font-mono text-xs font-semibold transition-all ${
                lang === 'th'
                  ? 'bg-[#0D9488] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-pressed={lang === 'th'}
            >
              TH
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D9488] px-3 py-2 text-xs font-semibold text-white shadow-subtle transition-all hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">{content.nav.downloadCv}</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
