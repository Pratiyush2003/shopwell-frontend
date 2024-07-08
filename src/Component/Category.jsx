import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Category = () => {
  const [list, setList] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG-aRbw1CudC0hOxCy2HwDAYQoMqb9Esnew&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nBZYXZ8BXq1sj1KXF6_Yt3jmKg_qf6J9YA&s",
    "https://img.etimg.com/photo/msid-98815516,imgsize-24654/LavaZ3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxNC-U1JE-65Jo11KNnLj3tRNbcn2szMtpw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUVyErN0K4wF0xkCWSHc62-nkW1zApS3ytg&s",
    "https://hometown.gumlet.io/media/cms/icons/cookware_600.jpg?w=300&dpr=2.6",
    "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
    "https://contents.mediadecathlon.com/p2393894/ae11c369077717da979826d33db65b1c/p2393894.jpg?format=auto&quality=70&f=650x0",
    "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
    "https://assets.nikshanonline.com/wp-content/uploads/2023/10/Mobile-Accessories.png"
  ]);

  return (
    <>
    <Link to={"/AllProducts"}>
      <div className='flex shadow-sm mx-2 items-center justify-center flex-row w-full overflow-x-auto mt-16 mb-4 gap-4 p-4 rounded'>
        {list.map((image, index) => (
          <div key={index} className='flex-shrink-0'>
            <img src={image} alt={`Image ${index}`} className='rounded h-8 w-8 md:h-14 md:w-14 mx-2 md:mr-4 md:ml-4' />
          </div>
        ))}
      </div>
      </Link>
    </>
  );
}

export default Category;
