import React, { createElement } from 'react';

export default function App() {
  return createElement('div', {
    className: 'min-h-screen bg-base-200 flex items-center justify-center p-8',
    children: createElement('div', {
      className: 'card bg-base-100 shadow-xl w-96',
      children: [
        createElement('figure', {
          children: createElement('img', {
            src: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
            alt: 'Shoes',
          }),
        }),
        createElement('div', {
          className: 'card-body',
          children: [
            createElement('h2', { className: 'card-title', children: 'Shoes!' }),
            createElement('p', { children: 'If a dog chews shoes whose shoes does he choose?' }),
            createElement('div', {
              className: 'card-actions justify-end',
              children: createElement('button', {
                className: 'btn btn-primary',
                children: 'Buy Now',
              }),
            }),
          ],
        }),
      ],
    }),
  });
}