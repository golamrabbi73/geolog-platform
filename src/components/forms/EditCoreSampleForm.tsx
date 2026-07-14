"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";

import { useGetCoreSample } from "@/hooks/core-sample/useGetCoreSample";
import { useUpdateCoreSample } from "@/hooks/core-sample/useUpdateCoreSample";

import toast from "react-hot-toast";

import {
  coreSampleSchema,
  type CoreSampleFormData,
} from "@/validators/sample.schema";

type Props = {
  id: string;
};

export default function EditCoreSampleForm({
  id,
}: Props) {
  const router = useRouter();

  const { data, isPending } = useGetCoreSample(id);

  const { mutate, isPending: isUpdating } =
    useUpdateCoreSample();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CoreSampleFormData>({
    resolver: zodResolver(coreSampleSchema),
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        sampleId: data.data.sampleId,
        wellName: data.data.wellName,
        depthFrom: data.data.depthFrom,
        depthTo: data.data.depthTo,
        rockType: data.data.rockType,
        description: data.data.description ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: CoreSampleFormData) => {
    mutate(
      {
        id,
        payload: formData,
      },
      {
        onSuccess: () => {
          toast.success("Core sample updated successfully.");

          router.push("/samples");
        },

        onError: () => {
          toast.error("Failed to update core sample.");
        },
      }
    );
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormInput
        label="Sample ID"
        error={errors.sampleId?.message}
        {...register("sampleId")}
      />

      <FormInput
        label="Well Name"
        error={errors.wellName?.message}
        {...register("wellName")}
      />

      <FormInput
        label="Depth From"
        type="number"
        error={errors.depthFrom?.message}
        {...register("depthFrom", {
          valueAsNumber: true,
        })}
      />

      <FormInput
        label="Depth To"
        type="number"
        error={errors.depthTo?.message}
        {...register("depthTo", {
          valueAsNumber: true,
        })}
      />

      <FormInput
        label="Rock Type"
        error={errors.rockType?.message}
        {...register("rockType")}
      />

      <FormTextarea
        label="Description"
        rows={4}
        error={errors.description?.message}
        {...register("description")}
      />

      <button
        type="submit"
        disabled={isUpdating}
        className="btn btn-primary w-full"
      >
        {isUpdating
          ? "Updating..."
          : "Update Core Sample"}
      </button>
    </form>
  );
}