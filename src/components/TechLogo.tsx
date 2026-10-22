import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const getTechLogoSrc = (name: string): string | null => {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('vscode') || normalized.includes('visual studio code')) {
    return '/assets/img/tools/vscode.svg';
  }
  if (normalized.includes('postman')) {
    return '/assets/img/tools/postman.svg';
  }
  if (normalized === 'git' || normalized.includes('git & github')) {
    return '/assets/img/tools/git.svg';
  }
  if (normalized === 'github') {
    return '/assets/img/skill/github.png';
  }
  if (normalized.includes('docker')) {
    return '/assets/img/tools/docker.svg';
  }
  if (normalized.includes('colab')) {
    return '/assets/img/tools/colab.svg';
  }
  if (normalized.includes('tableplus')) {
    return '/assets/img/tools/tableplus.svg';
  }
  if (normalized.includes('workbench')) {
    return '/assets/img/tools/workbench.svg';
  }
  if (normalized.includes('ubuntu') || normalized.includes('wsl') || normalized.includes('linux')) {
    return '/assets/img/tools/ubuntu.svg';
  }
  if (normalized.includes('laragon') || normalized.includes('composer')) {
    return '/assets/img/tools/laragon.svg';
  }
  if (normalized.includes('python')) {
    return '/assets/img/skill/python.png';
  }
  if (normalized.includes('php')) {
    return '/assets/img/skill/php.png';
  }
  if (normalized.includes('laravel')) {
    return '/assets/img/skill/laravel.png';
  }
  if (normalized.includes('fastapi')) {
    return '/assets/img/tools/fastapi.svg';
  }
  if (normalized.includes('scikit')) {
    return '/assets/img/tools/scikitlearn.svg';
  }
  if (normalized.includes('livewire')) {
    return '/assets/img/tools/livewire.svg';
  }
  if (normalized.includes('tailwind')) {
    return '/assets/img/tools/tailwind.svg';
  }
  if (normalized.includes('mysql') || normalized === 'sql') {
    return '/assets/img/skill/mysql.png';
  }
  if (normalized.includes('firebase')) {
    return '/assets/img/skill/firebase.png';
  }
  if (normalized.includes('bootstrap')) {
    return '/assets/img/skill/bootstrap.png';
  }
  if (normalized.includes('tensorflow')) {
    return '/assets/img/tools/tensorflow.svg';
  }
  if (normalized.includes('java') && !normalized.includes('javascript')) {
    return '/assets/img/skill/java.png';
  }
  if (normalized.includes('android')) {
    return '/assets/img/skill/androidstudio.png';
  }
  if (normalized.includes('flutter')) {
    return '/assets/img/skill/flutter.png';
  }
  if (normalized.includes('alpine')) {
    return '/assets/img/tools/alpine.svg';
  }
  if (normalized.includes('flask')) {
    return '/assets/img/tools/flask.svg';
  }
  if (normalized.includes('html')) {
    return '/assets/img/skill/html.png';
  }
  if (normalized.includes('css')) {
    return '/assets/img/skill/css.png';
  }
  return null;
};

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-5 h-5', size }) => {
  const [hasError, setHasError] = useState(false);
  const src = getTechLogoSrc(name);

  if (!src || hasError) {
    return <Terminal className={`${className} text-white/50`} style={size ? { width: size, height: size } : undefined} />;
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setHasError(true)}
      className={`${className} object-contain transition-transform duration-200 shrink-0`}
      style={size ? { width: size, height: size } : undefined}
      loading="lazy"
    />
  );
};
