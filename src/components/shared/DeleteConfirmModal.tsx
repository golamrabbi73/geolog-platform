"use client";

type Props = {
  id: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string) => void;
};

export default function DeleteConfirmModal({
  id,
  title = "Are you sure?",
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="py-4">
          This action cannot be undone.
        </p>

        <div className="modal-action">
          <button
            className="btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn btn-error"
            onClick={() => {
              onConfirm(id);
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>

      <div
        className="modal-backdrop"
        onClick={onClose}
      />
    </dialog>
  );
}