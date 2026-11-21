import React, { useEffect, useState } from 'react'
import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  FileSpreadsheet,
  GitBranch,
  GitMerge,
  Info,
  Lock,
  MessageSquare,
  Monitor,
  Radio,
  RefreshCw,
  ShieldAlert,
  Smartphone,
  Sparkles,
  WifiOff,
} from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

function StatusPill({ status, tone = 'slate' }) {
  const toneClasses = {
    slate: 'border-slate-200 bg-slate-100 text-slate-700',
    teal: 'border-teal-200 bg-teal-50 text-teal-800',
    amber: 'border-amber-200 bg-amber-50 text-amber-800',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    navy: 'border-slate-700 bg-slate-900 text-white',
  }

  return (
    <span
      className={`inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
        toneClasses[tone] || toneClasses.slate
      }`}
    >
      {status}
    </span>
  )
}

function InteractiveNodeCard({
  node,
  isSelected,
  onSelect,
  tone = 'teal',
  extraBadge,
}) {
  const ringClass = isSelected
    ? 'border-[#0D9488] bg-teal-50/70 ring-2 ring-[#0D9488]/25 shadow-sm'
    : 'border-slate-200 bg-white hover:border-teal-400 hover:shadow-sm'

  return (
    <div className="group/node relative flex-1">
      <button
        type="button"
        onClick={() => onSelect(node.id)}
        className={`flex h-full w-full flex-col justify-between rounded-xl border p-3 text-left transition-all ${ringClass}`}
      >
        <div>
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <span
              className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-white ${
                isSelected ? 'bg-[#0D9488]' : 'bg-slate-900'
              }`}
            >
              {node.id}
            </span>
            <StatusPill status={node.status} tone={tone} />
          </div>

          <p className="mt-2 text-xs font-bold leading-snug text-slate-900">
            {node.shortLabel}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between gap-1 pt-1 text-[10px] text-slate-500">
          <span className="truncate font-mono">{node.actor}</span>
          {extraBadge || <Info className="h-3 w-3 shrink-0 text-slate-400 group-hover/node:text-[#0D9488]" />}
        </div>
      </button>

      {/* Hover Tooltip */}
      <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-xl border border-slate-700 bg-[#0F172A] p-3 text-left text-white opacity-0 shadow-xl transition-all duration-150 group-hover/node:visible group-hover/node:opacity-100">
        <div className="flex items-center justify-between gap-2 border-b border-slate-700 pb-1.5">
          <span className="font-mono text-[10px] font-bold text-teal-400">
            {node.id} • {node.status}
          </span>
          <span className="font-mono text-[9px] text-slate-400">Click to pin</span>
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-200">
          {node.logic}
        </p>
        <p className="mt-1.5 border-t border-slate-800 pt-1 text-[10px] text-amber-300">
          Fallback: {node.fallback}
        </p>
      </div>
    </div>
  )
}

function NodeDetailInspector({ node, labels }) {
  if (!node) return null

  return (
    <div className="mt-4 rounded-xl border border-teal-200 bg-teal-50/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-200/70 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[#0D9488] px-2 py-0.5 font-mono text-xs font-bold text-white">
            {node.id}
          </span>
          <h4 className="text-sm font-bold text-slate-900">{node.title}</h4>
        </div>
        <span className="rounded-md border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600">
          {labels.actor}: {node.actor}
        </span>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            {labels.trigger}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            {node.trigger}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-700">
            {labels.logic}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            {node.logic}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-700">
            {labels.fallback}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            {node.fallback}
          </p>
        </div>
      </div>
    </div>
  )
}

function HornbillArchitecture({ study, selectedId, onSelect }) {
  const nodes = study.nodes
  return (
    <div className="space-y-3">
      {/* Row 1: HB1 -> HB2 -> HB3 */}
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-3">
        {nodes.slice(0, 3).map((node, index) => (
          <div key={node.id} className="flex items-center gap-2">
            <InteractiveNodeCard
              node={node}
              isSelected={selectedId === node.id}
              onSelect={onSelect}
              tone={node.id === 'HB3' ? 'teal' : 'slate'}
              extraBadge={
                node.id === 'HB1' ? (
                  <MessageSquare className="h-3.5 w-3.5 text-teal-600" />
                ) : null
              }
            />
            {index < 2 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#0D9488] lg:block" />
            )}
          </div>
        ))}
      </div>

      {/* Embedded 7-Step State Machine Sub-Strip */}
      <div className="rounded-lg border border-teal-200/80 bg-white/90 px-3 py-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal-800">
            <GitMerge className="h-3.5 w-3.5 text-[#0D9488]" />
            HB3 Sub-States // 7-Step Interactive State Machine
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            Validate → Confirm / Edit → Categorize
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {study.sevenStatesMini.map((stateLabel, idx) => (
            <React.Fragment key={stateLabel}>
              <span
                className={`rounded-md border px-2 py-1 font-mono text-[10px] font-semibold ${
                  idx === 3 || idx === 4
                    ? 'border-amber-200 bg-amber-50 text-amber-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                {stateLabel}
              </span>
              {idx < study.sevenStatesMini.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-slate-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2: HB4 -> HB5 -> HB6 */}
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-3">
        {nodes.slice(3, 6).map((node, index) => (
          <div key={node.id} className="flex items-center gap-2">
            <InteractiveNodeCard
              node={node}
              isSelected={selectedId === node.id}
              onSelect={onSelect}
              tone={node.id === 'HB4' ? 'amber' : node.id === 'HB6' ? 'emerald' : 'teal'}
              extraBadge={
                node.id === 'HB4' ? (
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                ) : node.id === 'HB6' ? (
                  <Activity className="h-3.5 w-3.5 text-emerald-600" />
                ) : null
              }
            />
            {index < 2 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#0D9488] lg:block" />
            )}
          </div>
        ))}
      </div>

      {/* Highlighted Error Handling & Rate-Limit Auto-Discovery Loop */}
      <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-900">
            <RefreshCw className="h-3 w-3" />
            {study.errorLoop.badge}
          </span>
          <span className="font-mono text-[10px] font-semibold text-amber-800">
            HB2 ↔ HB3 ↔ HB4 Self-Healing Loop
          </span>
        </div>
        <p className="mt-2 text-xs font-bold text-slate-900">
          {study.errorLoop.title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-700">
          {study.errorLoop.summary}
        </p>
        <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
          {study.errorLoop.steps.map((step) => (
            <div
              key={step}
              className="rounded-lg border border-amber-200 bg-white px-2.5 py-2 font-mono text-[11px] font-medium text-slate-800"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MonitoArchitecture({ study, selectedId, onSelect }) {
  const onlineNodes = study.nodes.filter((n) => n.track === 'online')
  const algorithmNodes = study.nodes.filter((n) => n.track === 'algorithm')
  const offlineNodes = study.nodes.filter((n) => n.track === 'offline')

  return (
    <div className="space-y-3.5">
      {/* Track A: Online Mode (Bidirectional) */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/35 p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
            <Cloud className="h-3.5 w-3.5" />
            {study.tracks.onlineLabel}
          </span>
          <StatusPill status="CLOUD SYNC" tone="emerald" />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-3">
          {onlineNodes.map((node, index) => (
            <div key={node.id} className="flex items-center gap-2">
              <InteractiveNodeCard
                node={node}
                isSelected={selectedId === node.id}
                onSelect={onSelect}
                tone="emerald"
                extraBadge={
                  node.id === 'MO2' ? (
                    <Lock className="h-3.5 w-3.5 text-slate-600" />
                  ) : node.id === 'MO3' ? (
                    <Database className="h-3.5 w-3.5 text-emerald-700" />
                  ) : null
                }
              />
              {index < onlineNodes.length - 1 && (
                <ArrowLeftRight className="hidden h-4 w-4 shrink-0 text-emerald-700 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Track B & Track C Side-by-Side on Desktop */}
      <div className="grid gap-3.5 lg:grid-cols-2">
        {/* Track B: Core Algorithm */}
        <div className="rounded-xl border border-teal-200 bg-teal-50/35 p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal-800">
              <Cpu className="h-3.5 w-3.5" />
              {study.tracks.algorithmLabel}
            </span>
            <StatusPill status="CLOSED LOOP" tone="teal" />
          </div>
          <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2">
            {algorithmNodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-2">
                <InteractiveNodeCard
                  node={node}
                  isSelected={selectedId === node.id}
                  onSelect={onSelect}
                  tone="teal"
                />
                {index < algorithmNodes.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#0D9488] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Track C: Zero-Internet Fallback */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/45 p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800">
              <WifiOff className="h-3.5 w-3.5" />
              {study.tracks.offlineLabel}
            </span>
            <StatusPill status="ZERO INTERNET" tone="amber" />
          </div>
          <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2">
            {offlineNodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-2">
                <InteractiveNodeCard
                  node={node}
                  isSelected={selectedId === node.id}
                  onSelect={onSelect}
                  tone="amber"
                  extraBadge={
                    node.id === 'MO6' ? (
                      <FileSpreadsheet className="h-3.5 w-3.5 text-amber-700" />
                    ) : null
                  }
                />
                {index < offlineNodes.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-amber-700 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MysteryArchitecture({ study, selectedId, onSelect }) {
  const nodes = study.nodes
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-1.5">
            <InteractiveNodeCard
              node={node}
              isSelected={selectedId === node.id}
              onSelect={onSelect}
              tone={
                node.id === 'MF3'
                  ? 'teal'
                  : node.id === 'MF5'
                  ? 'emerald'
                  : 'slate'
              }
              extraBadge={
                node.id === 'MF3' ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D9488]" />
                ) : node.id === 'MF2' ? (
                  <GitBranch className="h-3.5 w-3.5 text-slate-600" />
                ) : null
              }
            />
            {index < nodes.length - 1 && (
              <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-[#0D9488] lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function KrampusArchitecture({ study, selectedId, onSelect }) {
  const hostNodes = study.nodes.filter((n) => n.track === 'host')
  const clientNodes = study.nodes.filter((n) => n.track === 'client')

  return (
    <div className="space-y-3">
      {/* Control Plane: Host-Authoritative Pipeline */}
      <div className="rounded-xl border border-teal-200 bg-teal-50/35 p-3">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal-800">
            <Radio className="h-3.5 w-3.5 text-[#0D9488]" />
            HOST-AUTHORITATIVE CONTROL PLANE (SINGLE SOURCE OF TRUTH)
          </span>
          <StatusPill status="STATE_SYNC" tone="teal" />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-3">
          {hostNodes.map((node, index) => (
            <div key={node.id} className="flex items-center gap-2">
              <InteractiveNodeCard
                node={node}
                isSelected={selectedId === node.id}
                onSelect={onSelect}
                tone={node.id === 'KR2' ? 'emerald' : 'teal'}
                extraBadge={
                  node.id === 'KR2' ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  ) : node.id === 'KR3' ? (
                    <Radio className="h-3.5 w-3.5 text-teal-600" />
                  ) : null
                }
              />
              {index < hostNodes.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#0D9488] lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Client Plane: Read-Only Display & Idempotent Mobile Controllers */}
      <div className="grid gap-3 sm:grid-cols-2">
        {clientNodes.map((node) => (
          <div
            key={node.id}
            className={`rounded-xl border p-3 ${
              node.id === 'KR4'
                ? 'border-slate-200 bg-slate-100/60'
                : 'border-amber-200 bg-amber-50/40'
            }`}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                {node.id === 'KR4' ? (
                  <Monitor className="h-3.5 w-3.5 text-slate-600" />
                ) : (
                  <Smartphone className="h-3.5 w-3.5 text-amber-700" />
                )}
                {node.id === 'KR4' ? 'SUBSCRIBER ONLY (NO WRITES)' : 'PLAYER_ACTION + AUTO-RETRY'}
              </span>
              <StatusPill
                status={node.id === 'KR4' ? 'READ-ONLY' : '4 PHONES'}
                tone={node.id === 'KR4' ? 'slate' : 'amber'}
              />
            </div>
            <InteractiveNodeCard
              node={node}
              isSelected={selectedId === node.id}
              onSelect={onSelect}
              tone={node.id === 'KR4' ? 'slate' : 'amber'}
            />
          </div>
        ))}
      </div>

      {/* QA Automation & Sync Integrity Banner */}
      {study.qaBanner && (
        <div className="rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-900">
              <CheckCircle2 className="h-3 w-3" />
              {study.qaBanner.badge}
            </span>
            <span className="font-mono text-[10px] font-semibold text-emerald-800">
              Vitest Pure Logic Suite • Zero Regression
            </span>
          </div>
          <p className="mt-2 text-xs font-bold text-slate-900">
            {study.qaBanner.title}
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {study.qaBanner.steps.map((step) => (
              <div
                key={step}
                className="rounded-lg border border-emerald-200 bg-white px-2.5 py-2 font-mono text-[11px] font-medium text-slate-800"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SystemDiagram({ study, compact = false }) {
  const { lang } = useLanguage()
  const ui = portfolioContent[lang].caseStudiesSection
  const [selectedId, setSelectedId] = useState(
    compact ? null : study.nodes[0]?.id || null
  )

  useEffect(() => {
    setSelectedId(compact ? null : study.nodes[0]?.id || null)
  }, [study.id, lang, compact])

  const selectedNode = study.nodes.find((n) => n.id === selectedId) || null

  const handleSelect = (id) => {
    if (compact) {
      setSelectedId((prev) => (prev === id ? null : id))
    } else {
      setSelectedId(id)
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/85 p-3.5 sm:p-4">
      {/* Diagram Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-800">
              <ShieldAlert className="h-3.5 w-3.5 text-[#0D9488]" />
              {study.diagramTitle}
            </span>
            <StatusPill status={study.diagramStatus} tone="teal" />
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500">
            {study.diagramSubtitle}
          </p>
        </div>

        <span className="font-mono text-[10px] font-medium text-slate-500">
          {ui.diagramHintHover}
        </span>
      </div>

      {/* Render Selected Diagram */}
      {study.diagramType === 'hornbill' && (
        <HornbillArchitecture
          study={study}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      )}
      {study.diagramType === 'monito' && (
        <MonitoArchitecture
          study={study}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      )}
      {study.diagramType === 'mystery' && (
        <MysteryArchitecture
          study={study}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      )}
      {study.diagramType === 'krampus' && (
        <KrampusArchitecture
          study={study}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      )}

      {/* Node Inspector (always visible in modal; toggleable by clicking any node on card) */}
      {selectedNode && (
        <NodeDetailInspector node={selectedNode} labels={ui.inspectorLabels} />
      )}
    </div>
  )
}
