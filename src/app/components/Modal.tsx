import React from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  modalContent: string;
}

/**
 * `Modal` is a component that displays a modal dialog with content based on the `showModal` prop.
 *
 * The modal is only visible when `showModal` is true. It displays the provided `modalContent` and provides functionality to toggle its visibility via the `setShowModal` function.
 *
 * @param {ModalProps} props - The props for the `Modal` component.
 * @returns {JSX.Element | null} The modal element if `showModal` is true; otherwise, returns null.
 */

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  modalContent,
}) =>
  showModal ? (
    <div className="modal text-white flex flex-row justify-center pt-3">
      <div className="modal-content">
        <p>{modalContent}</p>
      </div>
    </div>
  ) : null;

export default Modal;
