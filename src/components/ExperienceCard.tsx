import { Building2 } from 'lucide-react';

interface ExperienceCardProps {
  organization: string;
  role: string;
  date: string;
  description: string;
  logoPlaceholder?: boolean;
}

export const ExperienceCard = ({ 
  organization, 
  role, 
  date, 
  description,
  logoPlaceholder = true 
}: ExperienceCardProps) => {
  return (
    <div className="flex gap-4 p-6 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
      {/* Logo Placeholder */}
      {logoPlaceholder && (
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 border border-border rounded-lg flex items-center justify-center">
          <Building2 className="w-8 h-8 text-text-secondary" />
        </div>
      )}
      
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
