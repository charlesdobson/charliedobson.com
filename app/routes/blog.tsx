import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CharlieDobson.com" },
  ];
};

export default function Blog() {
  return (
    <h1>Blog</h1>
  );
}
