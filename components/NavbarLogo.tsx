import Image from "next/image";

interface LogoProps {
  src?: string;
  alt: string;
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, title }) => (
  <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center">
    <Image
      src={src || "/logo.png"}
      alt={alt}
      width={45}
      height={45}
      style={{ width: "auto", height: "auto" }}
      priority={true}
    />
    <span className="self-center font-sans text-base font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 uppercase text-transparent bg-clip-text">
      {title}
    </span>
  </a>
);
