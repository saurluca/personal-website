interface ExperienceCardProps {
  organization: string;
  role: string;
  date: string;
  description: string;
}

export const ExperienceCard = ({
  organization,
  role,
  date,
  description
}: ExperienceCardProps) => {
  return (
    <div className="p-6 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="text-lg font-bold text-text">{organization}</h3>
            <p className="text-sm font-medium text-primary">{role}</p>
          </div>
          <span className="text-sm text-text-secondary whitespace-nowrap">{date}</span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
