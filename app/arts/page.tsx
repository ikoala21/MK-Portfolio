'use client'

import React, { useState } from 'react';

export default function ArtsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif text-left my-4">The Ichi-go Ichi-e Project</h1>

      <div className={`prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 text-center ${isModalOpen ? 'blur' : ''}`}>
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <div className="mb-4">
            <img
              src="/art03.jpg"
              alt="Art Image3"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art03.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art04.jpg"
              alt="Art Image4"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art04.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art05.jpg"
              alt="Art Image5"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art05.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art06.jpg"
              alt="Art Image6"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art06.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art07.jpg"
              alt="Art Image7"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art07.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art08.jpg"
              alt="Art Image8"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art08.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art09.jpg"
              alt="Art Image9"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art09.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art10.jpg"
              alt="Art Image10"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art10.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art11.jpg"
              alt="Art Image11"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art11.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art12.jpg"
              alt="Art Image12"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art12.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art13.jpg"
              alt="Art Image13"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art13.jpg')}
            />
          </div>

          <div className="mb-4">
            <img
              src="/art14.jpg"
              alt="Art Image14"
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-200 object-cover cursor-pointer"
              style={{ width: '100%', height: '100%' }}
              onClick={() => openModal('/art14.jpg')}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-screen-md">
            <img src={selectedImage} alt="Selected Art" className="w-full h-auto" />
            <button className="modal-close-button text-white dark:text-gray-800 bg-gray-600 dark:bg-gray-300 hover:bg-gray-700 dark:hover:bg-gray-400 px-4 py-2 rounded-b-lg" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
