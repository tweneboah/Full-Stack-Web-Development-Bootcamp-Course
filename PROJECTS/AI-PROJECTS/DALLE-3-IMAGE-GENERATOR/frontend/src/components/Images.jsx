import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import "./Images.css";
const fetchImagesAPI = async () => {
  const res = await axios.get("http://localhost:9000/images");
  return res.data;
};

export default function Gallery() {
  const { data } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImagesAPI,
  });
  const [lightboxDisplay, setLightboxDisplay] = React.useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (url) => {
    setCurrentImage(url);
    setLightboxDisplay(true);
  };

  const closeLightbox = () => {
    setLightboxDisplay(false);
  };

  // Assign a class to each image based on its index or other criteria
  const getImageClass = (index) => {
    // Define patterns for different image sizes
    // For example, first image is large, second is medium, etc.
    const pattern = ["large", "medium", "small"];
    return `image-container ${pattern[index % pattern.length]}`;
  };

  return (
    <>
      <div className="gallery">
        {data?.map((image, index) => (
          <div
            key={index}
            className={`image-container image-${index + 1}`}
            onClick={() => openLightbox(image.url)}
          >
            <img
              src={image.url}
              alt={`Artwork ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {lightboxDisplay && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <img className="lightbox-image" src={currentImage} alt="Artwork" />
        </div>
      )}
    </>
  );
}
