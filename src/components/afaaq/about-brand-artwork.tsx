import Image from "next/image";

type AboutBrandArtworkProps = {
  variant?: "compact" | "wide";
};

const artworkAlt =
  "AFAAQ ARAB engineering graphic with a power substation and the message Connecting Energy, Building Futures.";

function ArtworkFrame({
  src,
  aspectClass,
  sizes,
  className = "",
}: {
  src: string;
  aspectClass: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-[var(--rule)] bg-white ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={artworkAlt}
        fill
        sizes={sizes}
        quality={92}
        className="object-contain"
      />
    </div>
  );
}

export function AboutBrandArtwork({ variant = "compact" }: AboutBrandArtworkProps) {
  if (variant === "wide") {
    return (
      <div className="w-full">
        <ArtworkFrame
          src="/images/about/afaaq-about-4x3.webp"
          aspectClass="aspect-[4/3]"
          sizes="calc(100vw - 2.5rem)"
          className="md:hidden"
        />
        <ArtworkFrame
          src="/images/about/afaaq-about-16x9.webp"
          aspectClass="aspect-[16/9]"
          sizes="(max-width: 1279px) calc(100vw - 3rem), 1216px"
          className="hidden md:block"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <ArtworkFrame
        src="/images/about/afaaq-about-4x3.webp"
        aspectClass="aspect-[4/3]"
        sizes="calc(100vw - 2.5rem)"
        className="md:hidden"
      />
      <ArtworkFrame
        src="/images/about/afaaq-about-16x9.webp"
        aspectClass="aspect-[16/9]"
        sizes="(max-width: 1023px) 46vw, 560px"
        className="hidden md:block"
      />
    </div>
  );
}
