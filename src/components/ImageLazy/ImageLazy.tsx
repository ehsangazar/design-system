import React, { useState, useEffect, useRef } from "react";
import Box from "../Box/Box";
import borderRadiusHandler from "../../utils/borderRadiusHandler";

interface ImageLazyTypes {
  src: string;
  fallbackSrc?: string;
  defaultIsVisible?: boolean;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  radius?: "none" | "small" | "medium" | "large" | "full";
}

const ImageLazy: React.FC<ImageLazyTypes> = ({
  src,
  fallbackSrc,
  defaultIsVisible = false,
  alt,
  className,
  style,
  radius,
}: ImageLazyTypes) => {
  const [isVisible, setIsVisible] = useState<boolean>(defaultIsVisible);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const fetchTheImageFirst = () => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setIsVisible(true);
    };
  };

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchTheImageFirst();
      }
    });
  };

  const defaultStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    aspectRatio: "16/9",
    borderRadius: borderRadiusHandler(radius),
  };

  const finalStyle = { ...defaultStyle, ...style };

  return (
    <Box>
      <img
        ref={imgRef}
        src={isVisible ? src : fallbackSrc}
        alt={alt}
        style={finalStyle}
        className={`${className} image-lazy`}
      />
    </Box>
  );
};

export default ImageLazy;
