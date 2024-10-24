import React from 'react';

const FeaturedCategories = () => {
  
  const categories = [
    {
      src: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
      name: 'Novel',
    },
    {
      src: 'https://rolibooks.com/wp-content/uploads/2022/10/9789351941903-scaled-1-1.jpg',
      name: 'Biography',
    },
    {
      src: 'https://assets1.ignimgs.com/2018/05/01/iconiccovers-blogroll-1525195679546_160w.jpg?width=1280',
      name: 'Comics',
    },
    {
      src: 'https://5.imimg.com/data5/HU/CG/ZL/SELLER-73290864/book-and-magazine-cover-designs-500x500.jpg',
      name: 'Magazine',
    },
    {
      src: 'https://i.ytimg.com/vi/_D_8LBTqM5w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkcM7GqZ0HyzKGzN8wudcIG0TE_A',
      name: 'Dictionary',
    },
    {
      src: 'https://ankdesign.in/wp-content/uploads/2016/03/Brahmi-8-X-10-COVER-DISPLAY-FOR-PRINT_300dpi.jpg',
      name: 'Script',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5325z2mmfjk-7fjFKJTtwiiY6VOey4-n7g&s',
      name: 'Manga ',
    },
    {
      src: 'https://cdn.britannica.com/05/92805-050-9E6AA843/edition-Encyclopaedia-Britannica.jpg',
      name: 'Encyclopedia',
    },
  ];

  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg bg-white">
      <h4 className="text-lg font-semibold ml-8 mb-4">CATEGORIES</h4> 
      <div className="flex items-center justify-center">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center mx-6"> 
              <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center overflow-hidden mb-2 transition-transform duration-300 hover:scale-105 hover:border-blue-500"> {/* Circular border with animation */}
                <img
                  src={category.src}
                  alt={`Featured Category ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" // Ensure the image fills the circle with animation
                />
              </div>
              <span className="text-sm font-bold transition-colors duration-300 hover:text-blue-500">{category.name}</span> {/* Bold image name with color change on hover */}
            </div>
            {index < categories.length - 1 && (
              <hr className="border-l border-gray-300 h-24 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;




