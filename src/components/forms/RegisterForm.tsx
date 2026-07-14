"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";

import {
  registerSchema,
  type RegisterFormData,
} from "@/validators/register.schema";

import { useRegister } from "@/hooks/auth/useRegister";

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
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
        console.log(response);
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
        label="Name"
        placeholder="Enter your name"
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
        placeholder="https://..."
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
        {isPending ? "Creating Account..." : "Register"}
      </button>
    </form>
  );
}