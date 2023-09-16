import React from 'react';

export default function ArtsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">The Ichi-go Ichi-e Project</h1>
      <br />

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 text-center">
        <hr />

        <div className="flex flex-wrap">
          <div className="mb-4 mr-4 w-1/3 sm:w-1/3">
            <img
              src="/art03.jpg"
              alt="Art Image3"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="mb-4 w-2/3 sm:w-1/3">
            <img
              src="/art04.jpg"
              alt="Art Image4"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
