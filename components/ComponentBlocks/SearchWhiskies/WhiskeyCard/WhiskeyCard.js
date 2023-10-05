import Link from "next/link";

export const WhiskeyCard = ({
  title,
  uri,
  description,
  specs,
  origins,
  regions,
  types,
}) => {
  return (
    <Link href={uri}>
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
