"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import FormInput from "@/components/ui/FormInput";

import {
  loginSchema,
  type LoginFormData,
} from "@/validators/login.schema";

import { useLogin } from "@/hooks/auth/useLogin";
import { useAuthStore } from "@/store/auth.store";
import { saveAccessToken } from "@/utils/token";

export default function LoginForm() {
  const router = useRouter();

  const { mutate, isPending } = useLogin();

  const { setAccessToken, setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: (response) => {
        const { accessToken, user } = response.data;

        saveAccessToken(accessToken);

        setAccessToken(accessToken);

        setUser(user);

        router.push("/dashboard");
      },

      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full"
      >
        {isPending ? "Signing In..." : "Login"}
      </button>
    </form>
  );
}