'use client'

import { FC, useEffect, useState } from 'react';

const HeavyComponent: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Імітація важкого завантаження (наприклад, 2 секунди)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32" aria-busy="true" aria-live="polite">
        <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-800 mr-2" />
        <span className="text-indigo-800 font-medium">Завантаження важкого компонента...</span>
      </div>
    );
  }

  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-indigo-900 text-lg font-semibold" tabIndex={0} aria-label="Важкий компонент завантажено">
      Важкий компонент успішно завантажено!
    </div>
  );
};

export default HeavyComponent; 