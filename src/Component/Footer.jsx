import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isBottom && (
        <footer className="footer bg-black text-base-content p-4 text-center">
          <aside className="bg-black">
            <p className="text-black">
              Copyright © {new Date().getFullYear()} - All rights reserved by ShopWell
              Industries Ltd
            </p>
          </aside>
        </footer>
      )}
    </>
  );
};

export default Footer;
