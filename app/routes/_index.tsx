import type { MetaFunction } from "@remix-run/node";
import avatar from "../assets/avatar.svg";

export const meta: MetaFunction = () => {
  return [{ title: "CharlieDobson.com" }];
};

export default function Index() {
  return (
    <header className="flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col justify-center sm:items-start items-center">
        <h1>Charlie Dobson</h1>
        <h3>Staff Engineer</h3>
        <div className="mt-4 flex flow-row gap-4">
          <a
            href="https://www.linkedin.com/in/charlesdobson/"
            className="group text-slate-700 hover:text-[#0077b5] transition duration-200 font-medium"
          >
            <i className="fa fa-linkedin text-[#0077b5]"></i>
            &nbsp;LinkedIn
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-[#0077b5]"></span>
          </a>
          <a
            href="https://github.com/charlesdobson"
            className="group text-slate-700 hover:text-[#181515] transition duration-200"
          >
            <i className="fa fa-github text-[#181515]"></i>
            &nbsp;GitHub
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-[#181515]"></span>
          </a>
          <a
            href="https://twitter.com/charliedobson"
            className="group text-slate-700 hover:text-[#1da1f2] transition duration-200"
          >
            <i className="fa fa-twitter text-[#1da1f2]"></i>
            &nbsp;Twitter
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-px bg-[#1da1f2]"></span>
          </a>
        </div>
      </div>
      <img src={avatar} />
    </header>
  );
}
