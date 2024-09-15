import React from 'react';
import ListingsCard from './ListingsCard';

const listingsinfo = [
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/airbnbimages/3d-house-model-with-modern-architecture.jpg?updatedAt=1726259591158',
    src2: 'https://ik.imagekit.io/h6pmd5ivo/airbnbimages/3d-house-model-with-modern-architecture.jpg?updatedAt=1726259591158',
    url3: 'https://ik.imagekit.io/h6pmd5ivo/airbnbimages/clay-banks-BJc1mj3xgeE-unsplash.jpg?updatedAt=1726259544109',
    location: 'Loutraki, Greece',
    rating: 4.88,
    viewed: 'Viewed 373 times last week',
    date: 'Oct 18 - 23',
    price: 840,
    guest: 'Guest Favourite',
  },

  {
    src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    location: 'Lake Como, Italy',
    rating: 4.72,
    viewed: 'Viewed 256 times last week',
    date: 'Nov 5 - 10',
    price: 950,
    guest: 'Perfect for Couples',
  },
  {
    src: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
    location: 'Berlin, Germany',
    rating: 4.95,
    viewed: 'Viewed 489 times last week',
    date: 'Dec 1 - 7',
    price: 720,
    guest: 'Stylish & Central',
  },
  {
    src: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg',
    location: 'Phuket, Thailand',
    rating: 4.89,
    viewed: 'Viewed 812 times last week',
    date: 'Oct 25 - 30',
    price: 1050,
    guest: 'Beachfront Paradise',
  },
  {
    src: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
    location: 'Aspen, USA',
    rating: 4.8,
    viewed: 'Viewed 190 times last week',
    date: 'Jan 12 - 18',
    price: 1220,
    guest: 'Cozy Retreat',
  },
  {
    src: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg',
    location: 'Tokyo, Japan',
    rating: 4.93,
    viewed: 'Viewed 645 times last week',
    date: 'Feb 15 - 21',
    price: 990,
    guest: 'Modern & Minimal',
  },
  {
    src: 'https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg',
    location: 'Bali, Indonesia',
    rating: 4.77,
    viewed: 'Viewed 379 times last week',
    date: 'Mar 5 - 12',
    price: 880,
    guest: 'Tropical Escape',
  },
  {
    src: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    location: 'Marrakech, Morocco',
    rating: 4.85,
    viewed: 'Viewed 213 times last week',
    date: 'Apr 1 - 7',
    price: 1150,
    guest: 'Desert Oasis',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Edinburgh, Scotland',
    rating: 4.9,
    viewed: 'Viewed 530 times last week',
    date: 'May 10 - 17',
    price: 1350,
    guest: 'Historical Charm',
  },
  {
    src: 'https://images.pexels.com/photos/6315197/pexels-photo-6315197.jpeg',
    location: 'Santorini, Greece',
    rating: 2.25,
    viewed: 'Viewed 24 times last week',
    date: 'Jul 15 - 22',
    price: 980,
    guest: 'Romantic Getaway',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/54816518/32474bb0_original.jpg?im_w=720',
    location: 'Sydney, Australia',
    rating: 4.87,
    viewed: 'Viewed 412 times last week',
    date: 'Feb 9 - 16',
    price: 1100,
    guest: 'Iconic City Stay',
  },
  {
    src: 'https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg',
    location: 'Paris, France',
    rating: 4.96,
    viewed: 'Viewed 798 times last week',
    date: 'Jun 12 - 19',
    price: 1350,
    guest: 'Luxury City Escape',
  },
];

export const Listings = () => {
  return (
    <div className="  max-w-[2054px] m-auto xl:px-20 md:px-10 sm:px-2 px-4 py-10 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {listingsinfo.map(
        ({ location, rating, viewed, date, price, guest, src }) => (
          <div>
            <ListingsCard
              src={src}
              location={location}
              rating={rating}
              Viewed={viewed}
              date={date}
              price={price}
              guest={guest}
            />
          </div>
        )
      )}
    </div>
  );
};
