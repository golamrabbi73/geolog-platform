"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/ui/FormInput";

import {
  wellSchema,
  type WellFormData,
} from "@/validators/well.schema";

export default function WellForm() {
  const {
    register,
    handleSubmit,
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
    },
  });

  const onSubmit = (data: WellFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Well Name */}

      {/* Location */}

      {/* Operator */}

      {/* Depth */}

      {/* Status */}

      {/* Description */}

      {/* Submit Button */}
    </form>
  );
}