import React from 'react';
import { Check, Layout, Columns2 } from 'lucide-react';

const layoutIcons = {
  'single-column': Layout,
  'two-column': Columns2,
};

const TemplatePreviewCard = ({ template, isSelected, onSelect }) => {
  const { id, name, description, defaultColor, preview } = template;
  const LayoutIcon = layoutIcons[preview.layout] || Layout;

  return (
    <button
      onClick={() => onSelect(id)}
      className={`group relative w-full text-left rounded-2xl border-2 transition-all duration-200 overflow-hidden cursor-pointer ${
        isSelected
          ? 'border-slate-800 shadow-lg scale-[1.02]'
          : 'border-slate-200 hover:border-slate-400 hover:shadow-md'
      }`}
    >
      {/* Mini preview visualization */}
      <div className="relative h-48 bg-slate-50 p-4 flex items-center justify-center">
        <TemplateMiniPreview preview={preview} color={defaultColor} />

        {isSelected && (
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
            <Check size={14} className="text-white" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: defaultColor }} />
          <h3 className="text-sm font-bold text-slate-800">{name}</h3>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
          <LayoutIcon size={10} />
          {preview.layout.replace('-', ' ')}
        </div>
      </div>
    </button>
  );
};

const TemplateMiniPreview = ({ preview, color }) => {
  if (preview.accent === 'centered') {
    return (
      <div className="w-32 h-40 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex flex-col items-center pt-3 px-3">
          <div className="w-6 h-6 rounded-full bg-slate-200 mb-1.5" />
          <div className="w-16 h-1.5 rounded-full bg-slate-300 mb-1" />
          <div className="w-12 h-1 rounded-full mb-1.5" style={{ backgroundColor: color }} />
          <div className="w-full h-px mb-1.5" style={{ backgroundColor: color, opacity: 0.4 }} />
        </div>
        <div className="px-3 space-y-1">
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="w-3/4 h-1 rounded-full bg-slate-100" />
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="w-2/3 h-1 rounded-full bg-slate-100" />
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="w-1/2 h-1 rounded-full bg-slate-100" />
        </div>
      </div>
    );
  }

  if (preview.accent === 'color-header') {
    return (
      <div className="w-32 h-40 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-10 px-2 pt-2 flex items-center gap-1.5" style={{ backgroundColor: color }}>
          <div className="w-5 h-5 rounded-lg bg-white/30" />
          <div>
            <div className="w-10 h-1.5 rounded-full bg-white/80 mb-0.5" />
            <div className="w-7 h-1 rounded-full bg-white/50" />
          </div>
        </div>
        <div className="flex h-[calc(100%-2.5rem)]">
          <div className="w-2/3 p-2 space-y-1">
            <div className="w-full h-1 rounded-full bg-slate-100" />
            <div className="w-3/4 h-1 rounded-full bg-slate-100" />
            <div className="w-full h-1 rounded-full bg-slate-100" />
            <div className="w-2/3 h-1 rounded-full bg-slate-100" />
          </div>
          <div className="w-1/3 bg-slate-50 p-1.5 space-y-1">
            <div className="w-full h-1 rounded-full bg-slate-200" />
            <div className="w-3/4 h-1 rounded-full bg-slate-200" />
            <div className="flex flex-wrap gap-0.5 mt-1">
              <div className="w-4 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.6 }} />
              <div className="w-3 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.6 }} />
              <div className="w-5 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.6 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: left-sidebar (Executive Classic)
  return (
    <div className="w-32 h-40 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-2 pt-2 pb-1.5 flex items-center gap-1.5 border-b border-slate-100">
        <div className="w-5 h-5 rounded-full bg-slate-200" />
        <div>
          <div className="w-12 h-1.5 rounded-full bg-slate-300 mb-0.5" />
          <div className="w-8 h-1 rounded-full" style={{ backgroundColor: color }} />
        </div>
      </div>
      <div className="flex h-[calc(100%-2rem)]">
        <div className="w-1/3 p-1.5 space-y-1 border-r border-slate-100">
          <div className="w-full h-1 rounded-full" style={{ backgroundColor: color, opacity: 0.3 }} />
          <div className="w-3/4 h-1 rounded-full bg-slate-100" />
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="flex flex-wrap gap-0.5 mt-1">
            <div className="w-4 h-2 rounded bg-slate-100" />
            <div className="w-3 h-2 rounded bg-slate-100" />
            <div className="w-5 h-2 rounded bg-slate-100" />
          </div>
        </div>
        <div className="w-2/3 p-1.5 space-y-1">
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="w-3/4 h-1 rounded-full bg-slate-100" />
          <div className="w-full h-1 rounded-full bg-slate-100" />
          <div className="w-2/3 h-1 rounded-full bg-slate-100" />
          <div className="w-full h-1 rounded-full bg-slate-100" />
        </div>
      </div>
    </div>
  );
};

const TemplatePicker = ({ templates, selectedId, onSelect, onContinue }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <div className="text-center pt-16 pb-8 px-4">
        <div className="inline-flex items-center gap-2 mb-4">
          <img src="/icons/icon-96x96.png" alt="Blink" className="w-10 h-10 rounded-xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Choose a Template
        </h1>
        <p className="text-slate-500 mt-2 text-sm md:text-base max-w-md mx-auto">
          Pick a layout that fits your style. You can always switch later.
        </p>
      </div>

      {/* Template Grid */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.map((tmpl) => (
            <TemplatePreviewCard
              key={tmpl.id}
              template={tmpl}
              isSelected={selectedId === tmpl.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>

      {/* Sticky footer CTA */}
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Selected: <span className="font-semibold text-slate-800">{templates.find((t) => t.id === selectedId)?.name}</span>
          </p>
          <button
            onClick={onContinue}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePicker;
