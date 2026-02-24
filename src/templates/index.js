import ExecutiveClassic from './ExecutiveClassic';
import MinimalistClean from './MinimalistClean';
import BoldCreative from './BoldCreative';

const templateRegistry = [
  {
    id: 'executive-classic',
    name: 'Executive Classic',
    description: 'Two-column layout with sidebar for skills & education. Professional and ATS-friendly.',
    component: ExecutiveClassic,
    defaultColor: '#f59e0b',
    preview: {
      layout: 'two-column',
      accent: 'left-sidebar',
    },
  },
  {
    id: 'minimalist-clean',
    name: 'Minimalist Clean',
    description: 'Single-column, centered header with generous whitespace. Elegant and modern.',
    component: MinimalistClean,
    defaultColor: '#3b82f6',
    preview: {
      layout: 'single-column',
      accent: 'centered',
    },
  },
  {
    id: 'bold-creative',
    name: 'Bold Creative',
    description: 'Full-color header banner with right sidebar. Stands out for creative roles.',
    component: BoldCreative,
    defaultColor: '#454545',
    preview: {
      layout: 'two-column',
      accent: 'color-header',
    },
  },
];

export { templateRegistry };
export { ExecutiveClassic, MinimalistClean, BoldCreative };
