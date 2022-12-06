import { Avatar } from "./Avatar";
type UserCardProps = {
  src: string;
  name: string;
};
export const UserCard = ({ src, name }: UserCardProps) => (
  <li className="flex items-center gap-4">
    <Avatar src={src} />
    <div>
      <a className="text-gray-700 font-bold mx-1 hover:underline" href="#">
        {name}
      </a>
      <span className="text-gray-700 text-sm font-light ml-2">
        Created 23 Posts
      </span>
    </div>
  </li>
);
