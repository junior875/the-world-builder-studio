import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { projects, type Project } from '@/data/projects';
import { useState } from 'react';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(157_69%_37%/0.1)] hover:border-primary/20 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
            {project.id === 'hivegrid' ? 'HiveGrid' :
             project.id === 'atmos' ? 'Atmos' :
             project.id === 'td-edge' ? 'TD-Edge' :
             project.id === 'sentria' ? 'SentrIA' :
             project.id === 'recruitment-ai' ? 'Recruitment AI' :
             project.id === 'deliveryroute' ? 'DeliveryRoute AI' :
             'IziBar'}
          </h3>
          <p className="font-mono-dm text-xs text-muted-foreground mt-1">
            {t(project.typeEn, project.typePt)}
          </p>
        </div>
        <span className={`font-mono-dm text-[10px] uppercase tracking-wider px-3 py-1 rounded-full ${project.badgeColor}`}>
          {project.badgeText}
        </span>
      </div>

      {/* Description */}
      <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-6">
        {t(project.descEn, project.descPt)}
      </p>

      {/* Stats */}
      {project.stats.length > 0 && (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-40' : 'max-h-0 mb-0'}`}>
          {project.stats.map((stat, i) => (
            <div key={i} className="text-center p-3 rounded-lg bg-secondary/50">
              <p className="font-mono-dm text-lg text-primary">{stat.value}</p>
              <p className="font-mono-dm text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="font-body italic text-sm text-muted-foreground border-l-2 border-primary/30 pl-4 mb-6">
        {t(project.quoteEn, project.quotePt)}
      </blockquote>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stackTags.map(tag => (
          <span key={tag} className="font-mono-dm text-[10px] px-2 py-1 rounded bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono-dm text-xs uppercase tracking-[0.25em] text-primary mb-4">
            {t('Selected Work', 'Trabalhos Selecionados')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl">
            {t('Products I shipped', 'Produtos que eu entreguei')}
            <br />
            <span className="italic text-muted-foreground">{t('from zero.', 'do zero.')}</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
