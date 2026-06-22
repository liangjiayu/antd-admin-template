import { useMutation, useQuery } from '@tanstack/react-query';

import { FastApiServices } from '@/services';
import { refreshQuery } from '@/utils/query-client';

export const TASK_LIST_KEY = ['task', 'list'] as const;

/** placeholderData 让翻页/筛选时保留旧数据，避免空屏闪烁 */
export function useTaskList(params: FastAPI.getTasksParams) {
  return useQuery({
    queryKey: [...TASK_LIST_KEY, params],
    queryFn: () => FastApiServices.Task.getTasks(params),
    placeholderData: (prev) => prev,
  });
}

/** 删除任务：成功后失效列表缓存触发自动刷新；UI 反馈交由调用方处理 */
export function useDeleteTask() {
  return useMutation({
    mutationFn: (id: number) => FastApiServices.Task.deleteTask({ id }),
    onSuccess: () => refreshQuery(TASK_LIST_KEY),
  });
}
