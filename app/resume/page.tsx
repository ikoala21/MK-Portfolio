'use client';

import React from 'react';

const ResumePage = () => {
  const pdfUrl = '/resume.pdf';

  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          My Resume
        </h1>
        <hr className="border-t border-gray-300 dark:border-gray-600 mb-4" />
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explore my qualifications and experience in detail by viewing my
          resume.
        </p>
        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          className="text-blue-500 dark:text-blue-400 hover:underline text-lg"
          onClick={openPdfInNewTab}
        >
          View Resume
        </button>
      </div>
    </section>
  );
};

export default ResumePage;
