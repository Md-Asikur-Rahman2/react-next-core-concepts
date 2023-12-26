import { Metadata } from "next";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center leading-tight text-5xl text-gray-800 p-6">
      Asikur NotFound
    </div>
  );
};

export default NotFound;
export async function generateMetadata({ params: { id } }: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    
    return {
      title: data.name + data.email + "NotFound Asikur Rahman"
    };  
}
// export const metadata: Metadata = {
//   title: "Not Found",
//   description: "Generated by Not Found",
// };
