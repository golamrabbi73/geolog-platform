import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<
  HTMLInputElement,
  FormInputProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium">
          {label}
        </span>
      </label>

      <input
        ref={ref}
        {...props}
        className={`input input-bordered w-full ${
          className ?? ""
        }`}
      />

      {error && (
        <label className="label">
          <span className="label-text-alt text-error">
            {error}
          </span>
        </label>
      )}
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;