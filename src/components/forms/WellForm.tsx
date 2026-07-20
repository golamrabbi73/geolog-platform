"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import FormTextarea from "@/components/ui/FormTextarea";

import { useCreateWell } from "@/hooks/well/useCreateWell";

import toast from "react-hot-toast";

import {
  wellSchema,
  type WellFormData,
} from "@/validators/well.schema";
import { useRouter } from "next/navigation";

export default function WellForm() {
  const { mutate, isPending } = useCreateWell();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WellFormData>({
    resolver: zodResolver(wellSchema),

    defaultValues: {
      wellName: "",
      location: "",
      operator: "",
      depth: 0,
      status: "planned",
      description: "",
      imageUrl: "",
    },
  });

  const onSubmit = (data: WellFormData) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Well created successfully.");

        reset();

        router.push("/wells");
        },

      onError: () => {
        toast.error("Failed to create well.");
        },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Well Name */}
      <FormInput
        label="Well Name"
        placeholder="Enter well name"
        error={errors.wellName?.message}
        {...register("wellName")}
      />

      {/* Location */}
      <FormInput
        label="Location"
        placeholder="Enter location"
        error={errors.location?.message}
        {...register("location")}
      />

      {/* Operator */}
      <FormInput
        label="Operator"
        placeholder="Enter operator name"
        error={errors.operator?.message}
        {...register("operator")}
      />

      {/* Depth */}
      <FormInput
        label="Depth (m)"
        type="number"
        placeholder="Enter depth"
        error={errors.depth?.message}
        {...register("depth", {
          valueAsNumber: true,
        })}
      />

      {/* Status */}
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

      {/* Description */}
      <FormTextarea
        label="Description"
        rows={4}
        placeholder="Write description..."
        error={errors.description?.message}
        {...register("description")}
      />

      {/* Image URL */}
      <FormInput
        label="Image URL (optional)"
        placeholder="https://example.com/well-photo.jpg"
        error={errors.imageUrl?.message}
        {...register("imageUrl")}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full"
      >
        {isPending ? "Creating..." : "Create Well"}
      </button>
    </form>
  );
}