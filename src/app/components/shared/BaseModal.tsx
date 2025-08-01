import { Modal, notification, Button, ReactNode } from "antd";
import { ReactNode as ReactNodeType } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNodeType;
  submitText?: string;
  cancelText?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  showFooter?: boolean;
}

export const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  submitText = "Submit",
  cancelText = "Cancel",
  onSubmit,
  onCancel,
  showFooter = true,
}: BaseModalProps) => {
  const [api, contextHolder] = notification.useNotification();

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className="wrapper">
          <h1>{title}</h1>
          
          {children}

          {showFooter && (
            <div className="buttons">
              <Button
                style={{ marginTop: "16px" }}
                onClick={handleCancel}
              >
                {cancelText}
              </Button>
              {onSubmit && (
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  style={{ marginTop: "16px" }}
                >
                  {submitText}
                </Button>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}; 