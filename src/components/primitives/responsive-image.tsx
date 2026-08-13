import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = Omit<ImageProps, "sizes"> & {
  sizes?: string;
};

export function ResponsiveImage({
  sizes = "(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 60vw",
  className = "",
  ...props
}: ResponsiveImageProps) {
  return (
    <Image
      sizes={sizes}
      className={`block h-auto w-full object-cover ${className}`}
      {...props}
    />
  );
}
