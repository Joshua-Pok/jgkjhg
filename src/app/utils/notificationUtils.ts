import { notification } from 'antd';

export const showSuccessNotification = (
  message: string, 
  description: string, 
  duration: number = 3
) => {
  notification.success({
    message,
    description,
    placement: "bottomRight",
    duration,
  });
};

export const showErrorNotification = (
  message: string, 
  description: string, 
  duration: number = 5
) => {
  notification.error({
    message,
    description,
    placement: "bottomRight",
    duration,
  });
}; 