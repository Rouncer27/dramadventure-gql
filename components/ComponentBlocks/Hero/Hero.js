import { styled } from "styled-components";
import Image from "next/image";
import { Btn1Two, H3White } from "@/styles/helpers";
import Link from "next/link";

export const Hero = ({ data }) => {
  return (
    <StyledSection>
      <div className="hero-content">
        <div className="hero-content__inner">
          <div className="hero-content__inner--content">
            <h2>{data.heroContent.title}</h2>
          </div>

          <div className="hero-content__inner--button">
            {data.heroContent.button.buttonType === "external" ? (
              <a
                target="_blank"
                rel="noopener"
                href={data.heroContent.button.buttonUrl}
              >
                {data.heroContent.button.buttonText}
              </a>
            ) : (
              <Link
                href={
                  data?.heroContent?.button?.pageLink?.uri
                    ? ata?.heroContent?.button?.pageLink?.uri
                    : "#"
                }
              >
                {data.heroContent.button.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="hero-bgimage">
        <Image
          alt={data.heroImage.altText}
          src={data.heroImage.sourceUrl}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 40rem;

  @media (min-width: 768px) {
    min-height: 75rem;
  }

  @media (min-width: 1025px) {
    min-height: 90rem;
  }

  .hero-title {
    position: relative;
    z-index: 100;
  }

  .hero-bgimage {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .hero-content {
    position: absolute;
    bottom: 10rem;
    left: 0;
    width: 100%;
    max-width: 75rem;
    background-color: rgba(0, 90, 60, 0.85);
    padding: 4.5rem 2rem;
    z-index: 100;

    &__inner {
      display: flex;
      align-items: center;
      margin-right: 0;
      margin-left: auto;
      width: 100%;
      max-width: 65rem;

      &--content {
        width: 65%;
        h2 {
          ${H3White};
        }
      }

      &--button {
        width: 35%;
        padding-left: 5rem;

        a {
          ${Btn1Two};
        }
      }
    }
  }
`;
