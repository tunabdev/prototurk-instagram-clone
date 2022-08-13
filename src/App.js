import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let slider = ref.current.querySelectorAll("img"),
      total = slider.length,
      current = 0;
    const imageSlider = () => {
      slider.forEach((img, i) => {
        img.classList.add("opacity-0", "ease-out");
      });
      slider[current].classList.remove("opacity-0");
      slider[current].classList.replace("ease-out", "ease-in");

      if (current === total - 1) current = 0;
      else current++;
    };
    let interval = setInterval(imageSlider, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const enable = username && password;
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full overflow-auto gap-x-8 ">
      <div className="login:hidden w-[380px] mb-8 h-[581px] bg-hero-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative ">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-out "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt="p1"
          />
          <img
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-out opacity-0 "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-out opacity-0 "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            alt=""
          />

          <img
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-out opacity-0 "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="w-[350px] grid gap-y-3 login:
        -mt-8"
      >
        <div className=" bg-white border px-[40px] pt-10 pb-2">
          <a href="#top" className="flex items-center justify-center mb-8">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="logo"
            />
          </a>
          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              label="Phone number, username, or email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label htmlFor="user" className="relative block cursor-text">
            <input
              name="user"
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-zinc-50 border rounded-sm w-full h-[38px] outline-none  text-xs focus:border-gray-400 px-2 valid:pt-3 peer"
            />
            <span className="absolute text-xs text-ig-gray -translate-y-1/2 pointer-events-none top-1/2 left-2 peer-valid:scale-[0.83333] transition-all peer-valid:-translate-y-[16px] peer-valid:-translate-x-[14px]">
              Phone number, username, or email
            </span>
          </label>
          <label htmlFor="password" className="relative block cursor-text">
            <input
              name="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-50 border rounded-sm w-full h-[38px] outline-none  text-xs focus:border-gray-400 px-2 valid:pt-3 peer"
            />
            <span
              className="absolute text-xs
               text-ig-gray -translate-y-1/2 pointer-events-none top-1/2 left-2 peer-valid:scale-[0.83333] transition-all peer-valid:-translate-y-4 
            peer-valid:left-[6px]"
            >
              Password
            </span>
          </label> */}
            <button
              disabled={!enable}
              type="submit"
              className="bg-brand text-white 
            text-sm h-[30px] rounded text-center disabled:opacity-30 font-semibold mt-1"
            >
              Log In
            </button>
            <div className="flex items-center my-3 mb-5 ">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-xs font-semibold uppercase text-ig-gray">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-300 "></div>
            </div>
            <a
              href="#login"
              className="flex mb-3 items-center justify-center text-sm font-semibold gap-x-2 text-facebook leading-[18px]"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="#forgot "
              className="flex items-center justify-center mb-2 text-xs leading-4 text-link"
            >
              Forgot Password?
            </a>
          </form>
        </div>
        <div className="p-4 text-sm font-normal text-center bg-white border ">
          Don't have and account?{" "}
          <a href="#signup" className="font-semibold text-brand">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
