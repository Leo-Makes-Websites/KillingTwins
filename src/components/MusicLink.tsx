import Image from "next/image";
import Link from "next/link";

interface MusicLinkProps {
  href: string;
  platform: string;
  linkProps?: React.ComponentProps<typeof Link>;
  className?: string;
}

const ImageLink: React.FC<MusicLinkProps> = ({
  href: url,
  platform,
  linkProps,
}) => {
  return (
    <Link
      className={`flex aspect-square place-content-center`}
      href={url}
      {...linkProps}
    >
      <Image
        className="flex-shrink-1 flex min-h-9 min-w-9 p-2"
        alt={`${platform} logo`}
        src={`/icons/${platform}.svg`}
        width={256}
        height={256}
      />
    </Link>
  );
};

export default ImageLink;
