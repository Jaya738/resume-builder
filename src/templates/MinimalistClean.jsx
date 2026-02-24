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
} from 'lucide-react';
import ProfileImage from '../components/ProfileImage';

const MinimalistClean = ({ data, showProfileImage = true, themeColor = '#3b82f6' }) => {
  const { header, experience, education, skills, projects } = data;

  const allSkills = [
    ...(skills.technical || []),
    ...(skills.tools || []),
    ...(skills.testing || []),
  ];

  return (
    <div
      className="resume-container template-minimalist-clean w-full max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none text-slate-800"
      style={{ '--theme-color': themeColor }}
    >
      {/* HEADER - Centered, minimal */}
      <header className="px-8 pt-8 pb-4 print:px-6 print:pt-6 print:pb-3 text-center">
        {showProfileImage && (
          <div className="flex justify-center mb-3">
            <ProfileImage name={header.name} imageName={header.profileImage} size="sm" />
          </div>
        )}
        <h1 className="text-3xl print:text-2xl font-light text-slate-900 tracking-[0.2em] uppercase">
          {header.name}
        </h1>
        <h2 className="text-sm print:text-xs font-normal tracking-[0.15em] uppercase mt-1" style={{ color: themeColor }}>
          {header.title}
        </h2>

        {/* Contact - centered row with dividers */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-3 text-xs text-slate-500">
          {header.contact.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {header.contact.location}
            </span>
          )}
          {header.contact.phone && (
            <>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Phone size={11} />
                {header.contact.phone}
              </span>
            </>
          )}
          {header.contact.email && (
            <>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Mail size={11} />
                {header.contact.email}
              </span>
            </>
          )}
          {header.contact.github && (
            <>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Github size={11} />
                <a href={`https://${header.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {header.contact.github.replace('github.com/', '')}
                </a>
              </span>
            </>
          )}
          {header.contact.linkedin && (
            <>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Linkedin size={11} />
                <a href={`https://${header.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </span>
            </>
          )}
          {header.contact.website && (
            <>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Globe size={11} />
                <a href={`https://${header.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {header.contact.website}
                </a>
              </span>
            </>
          )}
        </div>
      </header>

      {/* Thin accent line */}
      <div className="mx-16 print:mx-10 h-px" style={{ backgroundColor: themeColor }} />

      {/* Single-column layout */}
      <main className="px-8 py-5 print:px-6 print:py-4 space-y-5 print:space-y-4">
        {/* Summary */}
        <section>
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 print:mb-1.5">
            Profile
          </h3>
          <p
            className="text-xs print:text-sm text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: header.summary }}
          />
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-3 print:mb-2">
            Experience
          </h3>
          <div className="space-y-4 print:space-y-3">
            {experience.map((job) => (
              <article key={job.id} className="job-entry">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="text-sm print:text-sm font-semibold text-slate-800">{job.role}</h4>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {job.company} &middot; {job.location}
                    </div>
                  </div>
                  <span className="text-xs print:text-xs font-medium text-slate-400 whitespace-nowrap ml-4 flex items-center gap-1">
                    <Calendar size={10} />
                    {job.period}
                  </span>
                </div>
                {job.techStack && (
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <Code2 size={10} />
                    {job.techStack}
                  </div>
                )}
                <ul className="mt-1.5 space-y-0.5 print:space-y-0">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-xs print:text-xs text-slate-600 leading-relaxed print:leading-snug flex gap-2">
                      <span className="text-slate-300 mt-0.5">&ndash;</span>
                      <span dangerouslySetInnerHTML={{ __html: achievement }} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Two-column bottom: Education + Skills */}
        <div className="flex flex-col md:flex-row print:flex-row gap-6 print:gap-5">
          {/* Education */}
          <section className="md:w-1/3 print:w-1/3">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 print:mb-1.5">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <h4 className="text-xs font-semibold text-slate-800">{edu.degree}</h4>
                <div className="text-[11px] text-slate-500">{edu.school}</div>
                <div className="text-[10px] text-slate-400">
                  {edu.location} {edu.year && `· ${edu.year}`}
                  {edu.grade && <span className="ml-1 text-emerald-600">CGPA: {edu.grade}</span>}
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="md:w-2/3 print:w-2/3">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 print:mb-1.5">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-[11px] print:text-[10px] font-medium text-slate-600 border border-slate-200 rounded print:border-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 print:mb-1.5">
              Projects
            </h3>
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.id}>
                  <h4 className="text-xs font-semibold text-slate-800">{project.name}</h4>
                  <p className="text-xs text-slate-600 mt-0.5" dangerouslySetInnerHTML={{ __html: project.description }} />
                  {project.link && (
                    <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-500 hover:underline flex items-center gap-1 mt-0.5">
                      <ExternalLink size={9} />
                      {project.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {header.references && header.references.length > 0 && (
          <section>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 print:mb-1.5">
              References
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {header.references.map((ref, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-semibold text-slate-800">{ref.name}</h4>
                  <div className="text-[11px] text-slate-500">{ref.company} / {ref.title}</div>
                  {ref.phone && <div className="text-[11px] text-slate-400">Phone: {ref.phone}</div>}
                  {ref.email && <div className="text-[11px] text-slate-400">Email: {ref.email}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default MinimalistClean;
