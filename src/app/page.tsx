"use client";

import { SocialLogin } from "@/components/SocialLogin";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormLogin } from "@/components/FormLogin";
import { GetServerSideProps } from "next";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  console.log(data);
  const loginUserSchema = z.object({
    email: z.string().email("Formato de email inválido").toLowerCase(),
    password: z.string().min(8, "A senha precisa de no mínimo 8 caractéres"),
  });

  const { data: session } = useSession();
  console.log(session);

  type UserLogin = z.infer<typeof loginUserSchema>;

  const loginUser = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  function createUser(data: any) {
    console.log(data);
  }

  const {
    formState: { errors },
    handleSubmit,
  } = loginUser;

  return (
    <div className="w-screen flex gap-0 h-screen bg-primary">
      <div className="w-1/3 h-full bg-[#FCFCFC] flex justify-center items-center relative">
        {/* <img src="waves.svg" alt="" className="absolute right-[-270px]" /> */}
        <div className="flex flex-col h-max w-full px-16 gap-8">
          <h1>Login with your accounts</h1>
          <SocialLogin.Wrapper>
            <SocialLogin.Button
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <FcGoogle size={"24px"} />
              Google
            </SocialLogin.Button>
            <SocialLogin.Button
              onClick={(e) => {
                signIn("twitter");
                // signIn("facebook");
              }}
            >
              <FaFacebook color="#0673E7" size={"24px"} />
              Facebook
            </SocialLogin.Button>
            <SocialLogin.Button
              onClick={(e) => {
                signIn("github");
              }}
            >
              <FaGithub color="#000" size={"24px"} />
              Github
            </SocialLogin.Button>
          </SocialLogin.Wrapper>

          <FormProvider {...loginUser}>
            <FormLogin.Wrapper onSubmit={handleSubmit(createUser)}>
              <div>
                <FormLogin.Field>
                  <MdMailOutline size={"24px"} color="#337357" />
                  <FormLogin.Input
                    placeholder="Email"
                    name="email"
                    type="email"
                  />
                </FormLogin.Field>
                {errors.email && (
                  <FormLogin.Error message={errors.email.message!.toString()} />
                )}
              </div>

              <div>
                <FormLogin.Field>
                  <RiLockPasswordLine size={"24px"} color="#337357" />
                  <FormLogin.Input
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </FormLogin.Field>
                {errors.password && (
                  <FormLogin.Error
                    message={errors.password.message!.toString()}
                  />
                )}
              </div>

              <FormLogin.Button type="submit">Enviar</FormLogin.Button>
            </FormLogin.Wrapper>
            {/* <div className="pt-4 flex flex-col gap-4">
              <div className="rounded-lg flex gap-3 bg-input px-4 py-2 w-full stroke-cinza">
                <MdMailOutline size={"24px"} color="#337357" />
                <input type="email" className="w-full bg-input outline-none" />
              </div>
              <div className="rounded-lg flex gap-3 bg-input px-4 py-2 w-full stroke-cinza">
                <RiLockPasswordLine size={"24px"} color="#337357" />
                <input type="email" className="w-full bg-input outline-none" />
              </div>
              <button className="mt-4 py-2 bg-primary text-white w-full rounded-lg px-6">
                Enviar
              </button>
            </div> */}
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps:GetServerSideProps = () => {
//   return {
//     props: {
//       user: 'Luis'
//     }
//   }
// }
