/** 任务状态：待办 / 进行中 / 已完成 */
export const STATUS_MAP = {
  todo: { text: '待办' },
  progress: { text: '进行中' },
  done: { text: '已完成' },
};

/** 任务优先级：低 / 中 / 高 */
export const PRIORITY_MAP = {
  low: { text: '低' },
  medium: { text: '中' },
  high: { text: '高' },
};

export const STATUS_OPTIONS = Object.entries(STATUS_MAP).map(([value, item]) => ({
  label: item.text,
  value,
}));
