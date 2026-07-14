import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium">
          {label}
        </span>
      </label>

      <textarea
        ref={ref}
        {...props}
        className={`textarea textarea-bordered w-full ${
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

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;