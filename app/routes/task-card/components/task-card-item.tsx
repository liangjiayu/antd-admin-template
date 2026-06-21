import dayjs from 'dayjs';
import { CalendarDays, Pencil, Trash2, User } from 'lucide-react';

import { PRIORITY_MAP, STATUS_MAP } from '@/components/crud-table/constants';
import { cn } from '@/utils';

/** 状态圆点配色：待办灰 / 进行中蓝 / 已完成绿 */
const STATUS_DOT: Record<FastAPI.Task['status'], string> = {
  todo: 'bg-gray-400',
  progress: 'bg-blue-500',
  done: 'bg-green-500',
};

/** 优先级徽标配色：低蓝 / 中橙 / 高红，适配深色模式 */
const PRIORITY_BADGE: Record<FastAPI.Task['priority'], string> = {
  low: 'bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
  medium: 'bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400',
  high: 'bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400',
};

type TaskCardItemProps = {
  task: FastAPI.Task;
  onEdit: (task: FastAPI.Task) => void;
  onDelete: (task: FastAPI.Task) => void;
};

const TaskCardItem = ({ task, onEdit, onDelete }: TaskCardItemProps) => {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border-base bg-bg-container p-4 transition hover:-translate-y-0.5 hover:shadow">
      <div className="absolute top-2.5 right-2.5 flex gap-0.5 opacity-0 transition group-hover:opacity-100">
        <button
          type="button"
          onClick={() => onEdit(task)}
          className="flex size-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-fill-hover hover:text-gray-700 dark:hover:text-gray-200"
        >
          <Pencil className="size-3.5" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(task)}
          className="flex size-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
        >
          <Trash2 className="size-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2 pr-14">
        <span className={cn('size-2 shrink-0 rounded-full', STATUS_DOT[task.status])} />
        <h3 className="line-clamp-1 flex-1 font-medium text-gray-800 dark:text-gray-100">
          {task.name}
        </h3>
      </div>

      <p className="mt-2.5 line-clamp-2 h-10 text-sm/5 text-gray-500 dark:text-gray-400">
        {task.description || '暂无描述'}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span
          className={cn(
            'rounded-md px-2 py-0.5 text-xs font-medium',
            PRIORITY_BADGE[task.priority],
          )}
        >
          {PRIORITY_MAP[task.priority].text}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {STATUS_MAP[task.status].text}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-border-base pt-3 text-xs text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <User className="size-3.5" />
          {task.assignee}
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays className="size-3.5" />
          {task.deadline ? dayjs(task.deadline).format('YYYY-MM-DD') : '-'}
        </span>
      </div>
    </div>
  );
};

export default TaskCardItem;
