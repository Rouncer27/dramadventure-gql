import Image from "next/image";

export const MainLogo = ({ mainLogo }) => {
  return (
    <div>
      <Image
        src={mainLogo.sourceUrl}
        height={500}
        width={500}
        alt={mainLogo.altText}
        objectFit="cover"
      />
    </div>
  );
};
