import Image from "next/image";

type AvatarProps = {
  src: string;
};
export const Avatar = ({ src }: AvatarProps) => (
  <figure className="w-14 h-14 relative">
    <Image
      className=" object-cover rounded-full"
      src={src}
      alt="Image of the author of the post"
      fill
    />
  </figure>
);
