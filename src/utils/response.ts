export const successResponse = (message: string, data: any = {}) => ({
  data,
  message,
});

export const errorResponse = (message: string, errors: any = []) => ({
  errors,
  message,
});
