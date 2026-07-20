"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import FormTextarea from "@/components/ui/FormTextarea";

import { useGetWell } from "@/hooks/well/useGetWell";
import { useUpdateWell } from "@/hooks/well/useUpdateWell";

import toast from "react-hot-toast";

import {
  wellSchema,
  type WellFormData,
} from "@/validators/well.schema";

type Props = {
  id: string;
};

export default function EditWellForm({
  id,
}: Props) {
  const router = useRouter();

  const { data, isPending } = useGetWell(id);

  const { mutate, isPending: isUpdating } =
    useUpdateWell();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WellFormData>({
    resolver: zodResolver(wellSchema),
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        wellName: data.data.wellName,
        location: data.data.location,
        operator: data.data.operator,
        depth: data.data.depth,
        status: data.data.status,
        description: data.data.description ?? "",
        imageUrl: data.data.imageUrl ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: WellFormData) => {
    mutate(
    {
        id,
        payload: formData,
    },
    {
        onSuccess: () => {
        toast.success("Well updated successfully.");

        router.push("/wells");
        },

        onError: () => {
        toast.error("Failed to update well.");
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
        label="Well Name"
        error={errors.wellName?.message}
        {...register("wellName")}
      />

      <FormInput
        label="Location"
        error={errors.location?.message}
        {...register("location")}
      />

      <FormInput
        label="Operator"
        error={errors.operator?.message}
        {...register("operator")}
      />

      <FormInput
        label="Depth"
        type="number"
        error={errors.depth?.message}
        {...register("depth", {
          valueAsNumber: true,
        })}
      />

      <FormSelect
        label="Status"
        error={errors.status?.message}
        options={[
          {
            label: "Planned",
            value: "planned",
          },
          {
            label: "Active",
            value: "active",
          },
          {
            label: "Completed",
            value: "completed",
          },
        ]}
        {...register("status")}
      />

      <FormTextarea
        label="Description"
        rows={4}
        error={errors.description?.message}
        {...register("description")}
      />

      <FormInput
        label="Image URL (optional)"
        placeholder="https://example.com/well-photo.jpg"
        error={errors.imageUrl?.message}
        {...register("imageUrl")}
      />

      <button
        type="submit"
        disabled={isUpdating}
        className="btn btn-primary w-full"
      >
        {isUpdating
          ? "Updating..."
          : "Update Well"}
      </button>
    </form>
  );
}