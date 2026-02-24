import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Code2,
  TestTube2,
  Wrench,
  User,
  FolderGit2,
  Calendar,
  Building2,
  MapPin,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProfileImage from '../components/ProfileImage';
import ContactRow from '../components/ContactRow';
import SkillGroup from '../components/SkillGroup';

const ExecutiveClassic = ({ data, showProfileImage = true, themeColor = '#f59e0b' }) => {
  const { header, experience, education, skills, projects } = data;

  return (
    <div
      className="resume-container w-full max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none text-slate-800"
      style={{ '--theme-color': themeColor }}
    >
      {/* HEADER */}
      <header className="px-5 pt-5 pb-3 md:px-8 md:pt-6 md:pb-4 print:px-5 print:pt-5 print:pb-3">
        <div className="flex flex-row items-center gap-4 md:gap-5 print:gap-5">
          {showProfileImage && (
            <ProfileImage name={header.name} imageName={header.profileImage} size="md" />
          )}

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl print:text-2xl font-bold text-slate-900 tracking-wide uppercase mb-0.5">
              {header.name}
            </h1>
            <h2 className="text-sm md:text-base print:text-sm font-medium tracking-wide mb-2 print:mb-2" style={{ color: themeColor }}>
              {header.title}
            </h2>
            <ContactRow contact={header.contact} />
          </div>
        </div>
      </header>

      <div className="mx-5 md:mx-8 print:mx-5 border-t border-slate-300" />

      {/* 2-Column Layout */}
      <main className="resume-main flex flex-col md:flex-row print:flex-row gap-5 p-5 md:p-8 print:p-5 print:pt-4 print:gap-5">
        {/* LEFT COLUMN */}
        <aside className="resume-sidebar w-full md:w-[24%] print:w-[24%] space-y-4 print:space-y-3 order-2 md:order-1 print:order-1">
          {/* Education */}
          <section>
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-2 print:space-y-2">
              {education.map((edu) => (
                <article key={edu.id} className="relative pl-3 border-l-2 border-slate-700 print:border-slate-500">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-bold text-slate-900 text-sm print:text-sm">{edu.degree}</h4>
                    {edu.year && (
                      <span className="text-[10px] print:text-xs font-medium text-slate-500 whitespace-nowrap">{edu.year}</span>
                    )}
                  </div>
                  <div className="text-xs print:text-xs text-slate-600">{edu.school}</div>
                  <div className="flex items-center justify-between text-[10px] print:text-xs text-slate-400">
                    <span>{edu.location}</span>
                    {edu.grade && <span className="text-emerald-600 font-medium">CGPA: {edu.grade}</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle icon={Sparkles} title="Skills" />
            <SkillGroup icon={Code2} label="Web Frameworks" skills={skills.technical} />
            <SkillGroup icon={TestTube2} label="Testing & Quality" skills={skills.testing} />
            <SkillGroup icon={Wrench} label="Tools & Cloud" skills={skills.tools} />
            {skills.soft && skills.soft.length > 0 && (
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Other Skills</h5>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 print:px-1.5 print:py-0.5 text-[11px] print:text-[9px] font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200 print:border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {header.languages && header.languages.length > 0 && (
            <section>
              <SectionTitle title="Languages" />
              <div className="flex flex-wrap gap-2">
                {header.languages.map((lang) => (
                  <span key={lang} className="px-2 py-1 text-xs print:text-[10px] font-medium bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                    {lang}
                  </span>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* RIGHT COLUMN */}
        <section className="resume-content w-full md:w-[76%] print:w-[76%] space-y-4 print:space-y-3 order-1 md:order-2 print:order-2">
          {/* Profile */}
          <section>
            <SectionTitle icon={User} title="Profile" />
            <p
              className="text-xs print:text-sm text-slate-600 leading-relaxed print:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: header.summary }}
            />
          </section>

          {/* Experience */}
          <section>
            <SectionTitle icon={Briefcase} title="Experience" />
            <div className="space-y-3 print:space-y-3">
              {experience.map((job) => (
                <article key={job.id} className="job-entry">
                  <div className="flex flex-row justify-between items-baseline mb-0.5">
                    <h4 className="text-sm print:text-sm font-semibold text-slate-700">{job.role}</h4>
                    <span className="text-xs print:text-xs font-semibold whitespace-nowrap ml-2 flex items-center gap-1" style={{ color: themeColor }}>
                      <Calendar size={10} style={{ color: themeColor }} />
                      {job.period}
                    </span>
                  </div>
                  <div className="text-sm print:text-sm text-slate-900 flex items-center gap-3 mt-0.5">
                    <span className="text-lg print:text-lg flex items-center gap-1 font-bold">
                      <Building2 size={16} className="text-slate-500" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 text-xs">
                      <MapPin size={10} className="text-slate-400" />
                      {job.location}
                    </span>
                  </div>
                  {job.techStack && (
                    <div className="text-xs print:text-xs text-slate-500 mt-1.5 flex items-start gap-1">
                      <Code2 size={12} className="text-slate-400 mt-0.5 flex-shrink-0" />
                      <span><span className="font-medium">Tech:</span> {job.techStack}</span>
                    </div>
                  )}
                  <ul className="list-none ml-0 mt-2 space-y-1 print:space-y-0.5">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs print:text-xs text-slate-600 leading-relaxed print:leading-snug flex gap-2">
                        <span className="mt-0.5" style={{ color: themeColor }}>▸</span>
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
              <SectionTitle icon={FolderGit2} title="Open Source" />
              <div className="space-y-3">
                {projects.map((project) => (
                  <article key={project.id} className="bg-slate-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-slate-300 print:pl-3">
                    <h4 className="font-bold text-slate-900 text-xs print:text-sm uppercase flex items-center gap-1.5">
                      <Award size={12} style={{ color: themeColor }} />
                      {project.name}
                    </h4>
                    <p
                      className="text-xs print:text-xs text-slate-600 mt-1"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                    {project.link && (
                      <p className="text-xs print:text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                        <ExternalLink size={10} className="text-blue-500" />
                        <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline print:text-blue-600">
                          {project.link}
                        </a>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* References */}
          {header.references && header.references.length > 0 && (
            <section>
              <SectionTitle title="References" />
              <div className="grid grid-cols-2 gap-4 print:gap-3">
                {header.references.map((ref, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-slate-900 text-xs print:text-xs">{ref.name}</h4>
                    <div className="text-xs print:text-[10px] text-slate-600">{ref.company} / {ref.title}</div>
                    {ref.phone && <div className="text-xs print:text-[10px] text-slate-500"><span className="font-medium">Phone:</span> {ref.phone}</div>}
                    {ref.email && <div className="text-xs print:text-[10px] text-slate-500"><span className="font-medium">Email:</span> {ref.email}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
    </div>
  );
};

export default ExecutiveClassic;
