import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../store/thunkFunctions.js";
import { useDispatch } from "react-redux";

function LoginPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {
    const body = {
      email,
      password,
    };

    dispatch(loginUser(body));

    reset();
  };

  const userEmail = { required: "필수 필드입니다." };

  const userPassword = {
    required: "필수 필드입니다",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow">
        <h1 className="text-3xl font-semibold text-center">로그인</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bt-white border"
              {...register("email", userEmail)}
            />
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bt-white border"
              {...register("password", userPassword)}
            />
            {errors?.password && (
              <div>
                <span className="text-red-500">{errors.password.message}</span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200"
            >
              로그인
            </button>
          </div>

          <p className="mt-8 text-sx font-light text-center text-gray-700">
            아이디가 없다면?{" "}
            <a href="/register" className="font-medium hover:underline">
              회원가입
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
