import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "store/auth";
import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "firebase.js";
import { LoginSchema } from "validation";

//
export default function Login() {
  const ref = useRef();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const enable = username && password;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //
  const handleSubmit = async (values, actions) => {
    // dispatch(
    //   setUser({
    //     username,
    //   })
    // );
    console.log("login oncesi");

    await login(values.username, values.password);
    console.log("navigate");
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };

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
          {
            //!FORMIK
          }
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, isValid, dirty }) => (
              <Form className="grid gap-y-1.5">
                <Input
                  name="username"
                  label="Phone number, username, or email"
                />
                <Input name="password" type="password" label="Password" />
                <button
                  type="submit"
                  className="bg-brand text-white 
            text-sm h-[30px] rounded text-center disabled:opacity-30 font-semibold mt-1"
                  disabled={!isValid || !dirty || isSubmitting}
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
              </Form>
            )}
          </Formik>
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
