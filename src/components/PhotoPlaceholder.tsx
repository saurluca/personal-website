import { Camera } from 'lucide-react';

interface PhotoPlaceholderProps {
  className?: string;
}

export const PhotoPlaceholder = ({ className = '' }: PhotoPlaceholderProps) => {
  return (
    <div
      className={`bg-gray-200 border border-border rounded-lg flex items-center justify-center ${className}`}
    >
      <Camera className="w-12 h-12 text-text-secondary" />
    </div>
  );
};
