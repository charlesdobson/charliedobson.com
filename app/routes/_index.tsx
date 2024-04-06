import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CharlieDobson.com" },
  ];
};

export default function Index() {
  return (
    <h1>Hi</h1>
  );
}
