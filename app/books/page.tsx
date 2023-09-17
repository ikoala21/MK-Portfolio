'use client'

import React, { useState } from 'react';

const booksData = [
  {
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    quote:
      '“There is a time for any fledgling artist where one\'s taste exceeds one\'s abilities. The only way to get through this period is to make things anyway.”',
    image: 'https://media.newyorker.com/photos/62eafb0f2ae7a75d222a57f4/master/w_1600,c_limit/220815_r40842web.jpg',
  },
  {
    title: 'I Want to Die But I Want to Eat Tteokbokki',
    author: 'Baek Sehee',
    quote:
      '“This book, therefore, ends not with answers but with a wish. I want to love and be loved. I want to find a way where I don\'t hurt myself. I want to live a life where I say things are good more than things are bad. I want to keep failing and discovering new and better directions. I want to enjoy the tides of feeling in me as the rhythms of life. I want to be the kind of person who can walk inside the vast darkness and find the one fragment of sunlight I can linger in for along time. Some day, I will."',
    image: 'https://www.imanshoppe.com/cdn/shop/products/pansing-distribution-book-i-want-to-die-but-i-want-to-eat-tteokbokki-by-baek-sehee-201280-35817733718169.jpg?v=1677121739',
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    quote:
      '“Maybe that’s what all lives were, though. Maybe even the most seemingly perfectly intense or worthwhile lives ultimately felt the same. Acres of disappointment and monotony and hurts and rivalries but with flashes of wonder and beauty. Maybe that was the only meaning that mattered. To be the world, witnessing itself."',
    image: 'https://s.abcnews.com/images/GMA/BookCoverMainImage_0925_v01_DG_1601049525476_hpMain_1x1_608.jpg',
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    quote: '“Have you no more memories? I am made of memories.”',
    image: 'https://media.theeverygirl.com/wp-content/uploads/2022/03/the-everygirl-feature-song-of-achilles.jpg',
  },
  {
    title: 'Hyperbole and a Half',
    author: 'Allie Brosh',
    quote:
      '“And even if everything still seems like hopeless bullshit, maybe it’s just pointless bullshit or weird bullshit or possibly not even bullshit.”',
    image: 'data:image/jpeg;base64,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',
  },
  {
    title: 'Before the coffee gets cold',
    author: 'Toshikazu Kawaguchi',
    quote:
      '“Water flows from high places to low places. That is the nature of gravity. Emotions also seem to act according to gravity. When in the presence of someone with whom you have a bond, and to whom you have entrusted your feelings, it is hard to lie and get away with it. The truth just wants to come flowing out. This is especially the case when you are trying to hide your sadness or vulnerability. It is much easier to conceal sadness from a stranger, or from someone you don’t trust.”',
    image: 'https://tucsontomegnome.files.wordpress.com/2022/12/img_0813.jpg?w=768'
  },
  {
    title: 'Circe',
    author: 'Madeline Miller',
    quote:
      '“That is one thing gods and mortals share. When we are young, we think ourselves the first to have each feeling in the world.”',
    image: 'https://i.pinimg.com/originals/09/68/07/0968071e27ff790ba71e80bfe085fec2.jpg'
  },
  // Add more books here...
];

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = React.useState(null);

  const handleBookClick = (index) => {
    setSelectedBook(booksData[index]);
  };

  const resetSelectedBook = () => {
    setSelectedBook(null);
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">2023 Reading List</h1>
      <br />
      <p>and my favorite line from each book...</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {booksData.map((book, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => handleBookClick(index)}
          >
            {/* Apply styles for smaller, rounded images */}
            <img
              src={book.image}
              alt={`${book.title} Cover`}
              className="w-full h-auto rounded-md object-cover"
              style={{ aspectRatio: '1/1' }}
            />
            <h5 className="text-lg font-semibold">{book.title}</h5>
            <p className="text-sm italic">{book.author}</p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="mt-8 prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <button
            className="text-blue-600 hover:underline"
            onClick={resetSelectedBook}
          >
            Back to Books
          </button>
          <hr />
          <h5 className="text-lg font-semibold">
            {selectedBook.title} by {selectedBook.author}
          </h5>
          <p>
            <i>{selectedBook.quote}</i>
          </p>
        </div>
      )}
    </section>
  );
}
