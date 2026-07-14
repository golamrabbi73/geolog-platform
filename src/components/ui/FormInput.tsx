import {
  InputHTMLAttributes,
  forwardRef,
} from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<
  HTMLInputElement,
  Props
>(({ label, error, ...props }, ref) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">
          {label}
        </span>
      </label>

      <input
        ref={ref}
        {...props}
        className="input input-bordered w-full"
      />

      {error && (
        <span className="text-error text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;