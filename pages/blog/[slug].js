import React from "react";

import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
  // get slugs
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // get content for each blog
  console.log(slug);
  const mdfile = fs.readFileSync(`posts/${slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}

function BlogPage({ frontMatter, content }) {
  console.log(frontMatter);
  console.log(content);
  return (
    <div className="prose mx-auto font-abc">
      <h1 className="text-2xl py-4 mb-1 ml-3 mr-3">{frontMatter.title}</h1>
      <h1 className="text-xl py-1 mb-1 ml-3 mr-3">{frontMatter.author}</h1>
      <h1 className="text-base py-1 mb-10 ml-3 mr-3">{frontMatter.date}</h1>

      <article
        className="prose lg:prose-xl ml-3 font-abc mr-3 px-8 text-justify"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  );
}

export default BlogPage;
