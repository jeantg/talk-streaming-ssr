import { delay, prisma } from "db";
import Comment from "./Comment";
export const ListComments = async () => {
  await delay();
  const data = await prisma.comment.findMany({ include: { user: true } });
  return (
    <ul className="mt-8 flex flex-col gap-4">
      {data.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </ul>
  );
};
