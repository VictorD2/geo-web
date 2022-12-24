/* eslint-disable comma-dangle */
import React from 'react';
// Icons
import { ArrowPathIcon } from '@heroicons/react/24/outline';

// Types
type AppLoadingProps = {
  overlayColor?: string;
  textColor?: string;
  text?: string;
  height?: string;
};

// eslint-disable-next-line object-curly-newline
const AppLoading = ({ overlayColor, text, textColor, height }: AppLoadingProps) => {
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <div
      className={classNames(
        `${overlayColor}`,
        `${height}`,
        'w-full opacity-70 top-0 left-0 absolute flex flex-col items-center justify-center gap-2'
      )}
    >
      <ArrowPathIcon className={classNames(`${textColor}`, 'w-10 h-10 animate-spin')} />
      <span className={classNames(`${textColor}`)}>{text}</span>
    </div>
  );
};
AppLoading.defaultProps = {
  overlayColor: 'bg-gray-900',
  text: 'Cargando Datos...',
  textColor: 'text-white',
  height: 'h-64',
};

export default AppLoading;
