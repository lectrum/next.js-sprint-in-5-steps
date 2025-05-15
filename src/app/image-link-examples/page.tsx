'use client'

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../../components/HeavyComponent'), {
  loading: () => (
    <div className="flex items-center justify-center h-32" aria-busy="true" aria-live="polite">
      <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-800 mr-2" />
      <span className="text-indigo-800 font-medium">Завантаження важкого компонента...</span>
    </div>
  ),
  ssr: false,
});

const ImageLinkExamplesPage = () => (
  <div className="space-y-10">
    <h1 className="text-3xl font-bold text-indigo-900 mb-6">SEO Image</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Приклад Image */}
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <Image
          src="/images/sample1.jpg"
          alt="Приклад SEO зображення: ноутбук і код"
          width={400}
          height={300}
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="rounded-lg shadow-md"
          title="SEO Image Example"
        />
        <span className="mt-2 text-sm text-gray-600">SEO-оптимізоване зображення</span>
      </div>
     
    </div>
    {/* HeavyComponent */}
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Імітація важкого компонента</h2>
      <HeavyComponent />
    </div>
  </div>
);

export default ImageLinkExamplesPage; 