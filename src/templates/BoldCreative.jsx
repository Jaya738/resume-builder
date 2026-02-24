import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  Calendar,
  Code2,
  GraduationCap,
  Briefcase,
  Sparkles,
  FolderGit2,
} from 'lucide-react';
const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

const profileImageByName = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.split('/').pop(), url])
);

const BoldCreative = ({ data, showProfileImage = true, themeColor = '#8b5cf6' }) => {
  const { header, experience, education, skills, projects } = data;
  const profileImageSrc = profileImageByName[header?.profileImage?.trim()] || '';

  return (
    <div
      className="resume-container w-full max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none text-slate-800"
      style={{ '--theme-color': themeColor }}
    >
      {/* HEADER - Bold colored banner */}
      <header
        className="px-6 py-6 md:px-8 md:py-8 print:px-6 print:py-5 text-white relative overflow-hidden"
        style={{ backgroundColor: themeColor }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white" />
        </div>

        <div className="relative flex items-center gap-5">
          {showProfileImage && profileImageSrc && (
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 print:w-20 print:h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg">
                <img
                  src={profileImageSrc}
                  alt={header.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl print:text-2xl font-black tracking-tight">
              {header.name}
            </h1>
            <h2 className="text-sm md:text-base print:text-sm font-light tracking-wide mt-0.5 opacity-90">
              {header.title}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs opacity-80">
              {header.contact.location && (
                <span className="flex items-center gap-1"><MapPin size={12} />{header.contact.location}</span>
              )}
              {header.contact.phone && (
                <span className="flex items-center gap-1"><Phone size={12} />{header.contact.phone}</span>
              )}
              {header.contact.email && (
                <span className="flex items-center gap-1"><Mail size={12} />{header.contact.email}</span>
              )}
              {header.contact.github && (
                <span className="flex items-center gap-1">
                  <Github size={12} />
                  <a href={`https://${header.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                    {header.contact.github.replace('github.com/', '')}
                  </a>
                </span>
              )}
              {header.contact.linkedin && (
                <span className="flex items-center gap-1">
                  <Linkedin size={12} />
                  <a href={`https://${header.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                    LinkedIn
                  </a>
                </span>
              )}
              {header.contact.website && (
                <span className="flex items-center gap-1">
                  <Globe size={12} />
                  <a href={`https://${header.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                    {header.contact.website}
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Body - reverse sidebar (right) */}
      <main className="resume-main flex flex-col md:flex-row print:flex-row">
        {/* LEFT - Main content */}
        <section className="resume-content w-full md:w-[68%] print:w-[68%] p-6 md:p-8 print:p-5 space-y-5 print:space-y-3 order-1">
          {/* Summary */}
          <section>
            <p
              className="text-xs print:text-sm text-slate-600 leading-relaxed italic border-l-3 pl-3 print:pl-2"
              style={{ borderColor: themeColor }}
              dangerouslySetInnerHTML={{ __html: header.summary }}
            />
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 print:mb-2 flex items-center gap-2" style={{ color: themeColor }}>
              <Briefcase size={14} />
              Experience
            </h3>
            <div className="space-y-4 print:space-y-3">
              {experience.map((job) => (
                <article key={job.id} className="job-entry relative pl-4 border-l-2 border-slate-200">
                  <div
                    className="absolute left-[-5px] top-1 w-2 h-2 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  />
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm print:text-sm font-bold text-slate-800">{job.role}</h4>
                    <span className="text-[11px] text-slate-400 whitespace-nowrap ml-3 flex items-center gap-1">
                      <Calendar size={10} />
                      {job.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">
                    {job.company} &bull; {job.location}
                  </div>
                  {job.techStack && (
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <Code2 size={10} />
                      {job.techStack}
                    </div>
                  )}
                  <ul className="mt-1.5 space-y-0.5">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-slate-600 leading-relaxed print:leading-snug flex gap-2">
                        <span style={{ color: themeColor }} className="mt-0.5 font-bold">&#9656;</span>
                        <span dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects && projects.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 print:mb-2 flex items-center gap-2" style={{ color: themeColor }}>
                <FolderGit2 size={14} />
                Projects
              </h3>
              <div className="space-y-2">
                {projects.map((project) => (
                  <div key={project.id} className="p-3 rounded-lg print:p-0" style={{ backgroundColor: `${themeColor}08` }}>
                    <h4 className="text-xs font-bold text-slate-800">{project.name}</h4>
                    <p className="text-xs text-slate-600 mt-0.5" dangerouslySetInnerHTML={{ __html: project.description }} />
                    {project.link && (
                      <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-[11px] hover:underline flex items-center gap-1 mt-1" style={{ color: themeColor }}>
                        <ExternalLink size={9} />
                        {project.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>

        {/* RIGHT - Sidebar */}
        <aside className="resume-sidebar w-full md:w-[32%] print:w-[32%] bg-slate-50 print:bg-slate-50 p-6 md:p-6 print:p-5 space-y-5 print:space-y-3 order-2">
          {/* Education */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2" style={{ color: themeColor }}>
              <GraduationCap size={14} />
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <h4 className="text-xs font-bold text-slate-800">{edu.degree}</h4>
                <div className="text-[11px] text-slate-600">{edu.school}</div>
                <div className="text-[10px] text-slate-400">
                  {edu.year} &middot; {edu.location}
                </div>
                {edu.grade && (
                  <div className="text-[10px] text-emerald-600 font-medium mt-0.5">CGPA: {edu.grade}</div>
                )}
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 flex items-center gap-2" style={{ color: themeColor }}>
              <Sparkles size={14} />
              Skills
            </h3>

            {skills.technical && skills.technical.length > 0 && (
              <div className="mb-3">
                <h5 className="text-[10px] font-semibold text-slate-500 mb-1">Frameworks</h5>
                <div className="flex flex-wrap gap-1">
                  {skills.technical.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-full text-white" style={{ backgroundColor: themeColor }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.testing && skills.testing.length > 0 && (
              <div className="mb-3">
                <h5 className="text-[10px] font-semibold text-slate-500 mb-1">Testing</h5>
                <div className="flex flex-wrap gap-1">
                  {skills.testing.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-full border" style={{ borderColor: themeColor, color: themeColor }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.tools && skills.tools.length > 0 && (
              <div className="mb-3">
                <h5 className="text-[10px] font-semibold text-slate-500 mb-1">Tools & Cloud</h5>
                <div className="flex flex-wrap gap-1">
                  {skills.tools.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-200 text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.soft && skills.soft.length > 0 && (
              <div>
                <h5 className="text-[10px] font-semibold text-slate-500 mb-1">Soft Skills</h5>
                <div className="flex flex-wrap gap-1">
                  {skills.soft.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-200 text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Languages */}
          {header.languages && header.languages.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: themeColor }}>
                Languages
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {header.languages.map((lang) => (
                  <span key={lang} className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-white border border-slate-200 text-slate-700">
                    {lang}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {header.references && header.references.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: themeColor }}>
                References
              </h3>
              {header.references.map((ref, idx) => (
                <div key={idx} className="mb-2">
                  <h4 className="text-xs font-bold text-slate-800">{ref.name}</h4>
                  <div className="text-[11px] text-slate-500">{ref.company} / {ref.title}</div>
                  {ref.phone && <div className="text-[10px] text-slate-400">{ref.phone}</div>}
                  {ref.email && <div className="text-[10px] text-slate-400">{ref.email}</div>}
                </div>
              ))}
            </section>
          )}
        </aside>
      </main>
    </div>
  );
};

export default BoldCreative;
