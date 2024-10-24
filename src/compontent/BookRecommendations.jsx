import React from 'react';

const BookRecommendations = () => {

  const books = [
    {
      src: 'https://miro.medium.com/v2/resize:fit:1400/0*tQ0CdoTItIGpDjLG',
      name: 'IKIGAI',
      price: '$15.99',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlW6udUp3EftTIhM9OfRXQLwWsEkTbmOloQ&s',
      name: 'Nexus',
      price: '$12.49',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKgjPjMN_4dddLqW7ljnX0XbZ9KseUaKcxA&s',
      name: 'Manifest',
      price: '$9.99',
    },
    {
      src: 'https://5.imimg.com/data5/HU/CG/ZL/SELLER-73290864/book-and-magazine-cover-designs-500x500.jpg',
      name: 'Fashion Magazine',
      price: '$7.99',
    },
    {
      src: 'https://cdn.britannica.com/05/92805-050-9E6AA843/edition-Encyclopaedia-Britannica.jpg',
      name: 'Encyclopedia',
      price: '$25.99',
    },
    {
      src: 'https://m.media-amazon.com/images/I/61KKT66JdhL._AC_UF350,350_QL80_.jpg',
      name: 'Do IT Doday',
      price: '$19.99',
    },
    {
      src: 'https://media.licdn.com/dms/image/D4D12AQHZJRikGoFIKw/article-cover_image-shrink_720_1280/0/1696425885734?e=2147483647&v=beta&t=GpXawCAMJqzTZw1qYtR5FJNCAITvrAxqFTSrW9q7jdw',
      name: 'Atomic Habits',
      price: '$14.49',
    },
    {
      src: 'https://miro.medium.com/v2/resize:fit:1400/0*q2209bUUJtM1dFlz',
      name: 'Same as Even',
      price: '$18.99',
    },
    {
      src: 'https://m.media-amazon.com/images/I/61tDyB8-5sL._AC_UF350,350_QL80_.jpg',
      name: 'Ratan Tata',
      price: '$21.99',
    },
    {
      src: 'https://5.imimg.com/data5/ANDROID/Default/2022/12/YG/SL/VX/161183780/product-jpeg-500x500.jpg',
      name: 'Doglapan',
      price: '$13.99',
    },
    {
      src: 'https://daveschoenbeck.com/wp-content/uploads/2020/08/B2B6606E-36C6-4A13-BB43-A022E0AFC4D4.jpeg',
      name: 'ReWork',
      price: '$11.99',
    },
    {
      src: 'https://5.imimg.com/data5/ANDROID/Default/2021/10/OT/DJ/YS/138133050/product-jpeg-500x500.jpg',
      name: 'Deep Work',
      price: '$16.49',
    },
    {
      src: 'https://hacktheentrepreneur.com/wp-content/uploads/2018/09/Built-to-Last-Successful-Habits-of-Visionary-Companies-by-Jim-Collins-and-Jerry-I.-Porras.jpg',
      name: 'Built To Last',
      price: '$17.50',
    },
    {
      src: 'https://i.etsystatic.com/17306608/r/il/a00841/5150941160/il_340x270.5150941160_kd3o.jpg',
      name: 'Good To Great',
      price: '$12.99',
    },
    {
      src: 'https://images.unsplash.com/photo-1593640475850-83be133a4663?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Business ',
      price: '$22.99',
    },
  ];

  return (
    <div className="p-2"> 
      <h2 className="text-xl font-bold mb-4 pl-4">RECOMM<span className='text-blue-400'>ENDED</span></h2>
      <div className="flex flex-wrap justify-between">
        {books.map((book, index) => (
          <div key={index} className="w-1/5 p-2"> 
            <div className="relative border rounded-lg p-2 bg-white shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"> {/* Added scale and shadow on hover */}
            
              <div className="absolute top-2 left-2 bg-blue-400 text-white text-xs px-2 py-1 rounded-full">New</div>

              
              <img 
                src={book.src} 
                alt={book.name} 
                className="w-full h-60 object-cover rounded-lg mb-2" 
              />

            
              <h3 className="text-sm font-semibold ">{book.name}</h3>

            
              <p className="text-xs text-left text-gray-700 font-bold mt-1">${book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRecommendations; 