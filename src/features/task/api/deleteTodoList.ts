import { axiosInstance } from '../../../axios';

export const callDeleteTodoList = async (
  id: string,
): Promise<{ error?: Error }> => {
  try {
    await axiosInstance.delete(`/api/todos/${id}`);

    return {};
  } catch (e) {
    return { error: e as Error };
  }
};
