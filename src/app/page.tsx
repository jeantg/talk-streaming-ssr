import {
  Category,
  ListComments,
  Posts,
  Skeleton,
  Title,
  UserCard,
} from "app/components";
import Header from "app/components/Header";
import { Suspense } from "react";

{
  /* <Suspense fallback={<Skeleton />}>

</Suspense> */
}
const Blog = () => (
  <>
    <Header />
    <main>
      <div className="px-6 py-8 ">
        <div className="flex justify-between mx-auto container gap-8">
          <section className='w-full lg:w-8/12"'>
            <Title>Posts</Title>
            <div className="mt-4">
              <Posts />
              <Suspense fallback={<Skeleton />}>
                {/* @ts-expect-error Server Component */}
                <ListComments />
              </Suspense>
            </div>
          </section>
          <aside className="w-4/12 flex-col gap-6 hidden lg:flex">
            <section>
              <Title>Authors</Title>
              <ul className="card">
                <UserCard src="/01.avif" name="John" />
                <UserCard src="/02.avif" name="Alice" />
              </ul>
            </section>
            <section>
              <Title>Categories</Title>
              <ul className="card">
                <Category>React</Category>
                <Category>Nextjs</Category>
                <Category>Tailwindcss</Category>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  </>
);

export default Blog;
