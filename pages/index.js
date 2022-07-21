import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  // get the post
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFiles = fs.readFileSync(`posts/${filename}`);
    const { data: frontMatter } = matter(readFiles);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log(`posts: ${posts}`);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanatan Astrology Blogs</title>
        <meta name="description" content="Vedic Astrology Blogs And Services" />
        <link rel="icon" href="/img/logosvg.svg" />
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0 font-abc">
          {posts?.map((post) => {
            return (
              <div className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <Link key={`${post.slug}`} href={`/blog/${post.slug}`}>
                  <a>
                    <img src={`${post.frontMatter.socialImage}`} />
                    <h3 className="text-xl py-3 pl-2 font-bold">
                      {post.frontMatter.title}
                    </h3>
                    <p className="text-base py-3 pl-2">
                      {post.frontMatter.metaDesc}
                    </p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
