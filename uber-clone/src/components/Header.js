import React from 'react'
import Image from "next/image";

const Header = () => {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: '/taxi.jpg',
    },
    {
      id: 2,
      name: 'Package',
      icon: '/boxx.jpg',
    }
  ];
  
  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-400 flex items-center'>
      <div className='mr-6'>
        <Image 
          src='/uberdownload.png'
          width={70} 
          height={70} 
          alt='Logo' 
        />
      </div>
      <div className='flex gap-6'>
        {headerMenu.map((item) => (
          <div key={item.id} className='flex items-center gap-2'>
            <Image 
              src={item.icon} 
              width={17} 
              height={17} 
              alt={item.name}
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
