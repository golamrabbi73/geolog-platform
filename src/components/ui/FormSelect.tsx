import {
  forwardRef,
  type SelectHTMLAttributes,
} from "react";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
}

const FormSelect = forwardRef<
  HTMLSelectElement,
  FormSelectProps
>(({ label, options, error, className, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium">
          {label}
        </span>
      </label>

      <select
        ref={ref}
        {...props}
        className={`select select-bordered w-full ${
          className ?? ""
        }`}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

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

FormSelect.displayName = "FormSelect";

export default FormSelect;