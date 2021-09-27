import React from "react";

/** @param {{src: string, alt: string, className: string}} src Needs to be a .jpg */
export const ResponsiveImage = ({ src, alt, className }) => {
  const baseName = src.replace(/\.jpg$/, "");
  const srcSet = `${src} 1x, ${baseName}@2x.jpg 2x, ${baseName}@3x.jpg 3x`;
  const avifSrcSet = srcSet.replaceAll(".jpg", ".avif");
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} />
      <img className={className} alt={alt} src={src} srcSet={srcSet} />
    </picture>
  );
};
