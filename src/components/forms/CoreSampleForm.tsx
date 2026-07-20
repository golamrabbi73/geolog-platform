"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";

import { useCreateCoreSample } from "@/hooks/core-sample/useCreateCoreSample";

import {
  coreSampleSchema,
  type CoreSampleFormData,
} from "@/validators/sample.schema";

export default function CoreSampleForm() {
  const router = useRouter();

  const { mutate, isPending } =
    useCreateCoreSample();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CoreSampleFormData>({
    resolver: zodResolver(coreSampleSchema),

    defaultValues: {
      sampleId: "",
      wellName: "",
      depthFrom: 0,
      depthTo: 0,
      rockType: "",
      description: "",
      imageUrl: "",
    },
  });

  const onSubmit = (
    data: CoreSampleFormData
  ) => {
    mutate(data, {
      onSuccess: () => {
        toast.success(
          "Core sample created successfully."
        );

        reset();

        router.push("/samples");
      },

      onError: () => {
        toast.error(
          "Failed to create core sample."
        );
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormInput
        label="Sample ID"
        placeholder="Sample ID"
        error={errors.sampleId?.message}
        {...register("sampleId")}
      />

      <FormInput
        label="Well Name"
        placeholder="Well Name"
        error={errors.wellName?.message}
        {...register("wellName")}
      />

      <FormInput
        type="number"
        label="Depth From"
        placeholder="Depth From"
        error={errors.depthFrom?.message}
        {...register("depthFrom", {
          valueAsNumber: true,
        })}
      />

      <FormInput
        type="number"
        label="Depth To"
        placeholder="Depth To"
        error={errors.depthTo?.message}
        {...register("depthTo", {
          valueAsNumber: true,
        })}
      />

      <FormInput
        label="Rock Type"
        placeholder="Rock Type"
        error={errors.rockType?.message}
        {...register("rockType")}
      />

      <FormTextarea
        label="Description"
        rows={4}
        placeholder="Description"
        error={errors.description?.message}
        {...register("description")}
      />

      <FormInput
        label="Image URL (optional)"
        placeholder="https://example.com/sample-photo.jpg"
        error={errors.imageUrl?.message}
        {...register("imageUrl")}
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full"
      >
        {isPending
          ? "Creating..."
          : "Create Core Sample"}
      </button>
    </form>
  );
}