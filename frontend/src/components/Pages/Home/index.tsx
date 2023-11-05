"use client";
import Image from 'next/image';
import React from 'react'

const HomePage = () => {  
  return (
    <div>
      <h1>Home Page</h1>
      <Image src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp"
       alt="Next.js Logo" width={200} height={200} priority/>
    </div>
  )
}

export default HomePage