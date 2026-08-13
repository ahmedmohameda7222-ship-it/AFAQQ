import Image, { getImageProps } from "next/image";

type AboutBrandArtworkProps = {
  variant?: "compact" | "wide";
};

const artworkAlt =
  "AFAAQ ARAB engineering graphic with a power substation and the message Connecting Energy, Building Futures.";

function WideArtwork() {
  const mobile = getImageProps({
    src: "/images/about/afaaq-about-4x3.webp",
    alt: artworkAlt,
    width: 1448,
    height: 1086,
    quality: 90,
    sizes: "calc(100vw - 2.5rem)",
  }).props;

  const desktop = getImageProps({
    src: "/images/about/afaaq-about-16x9.webp",
    alt: artworkAlt,
    width: 1672,
    height: 941,
    quality: 90,
    sizes: "(max-width: 1279px) calc(100vw - 3rem), 1216px",
  }).props;

  return (
    <div className="w-full overflow-hidden bg-white shadow-[0_1px_0_rgba(17,19,21,0.08)]">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
        <img
          {...mobile}
          alt={artworkAlt}
          className="block h-auto w-full"
          decoding="async"
        />
      </picture>
    </div>
  );
}

export function AboutBrandArtwork({ variant = "compact" }: AboutBrandArtworkProps) {
  if (variant === "wide") return <WideArtwork />;

  return (
    <div className="w-full overflow-hidden bg-white shadow-[0_1px_0_rgba(17,19,21,0.08)]">
      <Image
        src="/images/about/afaaq-about-4x3.webp"
        alt={artworkAlt}
        width={1448}
        height={1086}
        sizes="(max-width: 767px) calc(100vw - 2.5rem), 50vw"
        quality={90}
        className="block h-auto w-full"
      />
    </div>
  );
}
