"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";

import {
  registerSchema,
  type RegisterFormData,
} from "@/validators/register.schema";

import { useRegister } from "@/hooks/auth/useRegister";
import { AxiosError } from "axios";

export default function RegisterForm() {
  const router = useRouter();

  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      photoURL: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword, ...payload } = data;

    mutate(payload, {
      onSuccess: (response) => {
        toast.success(
          response.message || "Registration successful!"
        );

        reset();

        router.push("/login");
      },

      onError: (error: unknown) => {
  const message =
    error instanceof AxiosError
      ? error.response?.data?.message
      : undefined;

  toast.error(message ?? "Registration failed.");
},
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormInput
          label="Name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          label="Photo URL"
          placeholder="https://example.com/photo.jpg"
          error={errors.photoURL?.message}
          {...register("photoURL")}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password")}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isPending}
        >
          {isPending
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="link link-primary font-medium"
        >
          Login
        </Link>
      </div>
    </>
  );
}