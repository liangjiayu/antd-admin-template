import { App as AntdApp, Button, Empty, Input, Pagination, Select, Spin } from 'antd';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import { useTaskConfigModal } from '@/components/crud-table/components/task-config-modal';
import { STATUS_OPTIONS } from '@/components/crud-table/constants';
import { ModalActionType } from '@/constants';
import { refreshQuery } from '@/utils/query-client';

import TaskCardItem from './components/task-card-item';
import { TASK_LIST_KEY, useDeleteTask, useTaskList } from './hooks';

const TaskCard = () => {
  const { message, modal } = AntdApp.useApp();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [name, setName] = useState('');
  const [status, setStatus] = useState<FastAPI.Task['status'] | undefined>();

  const { data, isFetching } = useTaskList({ page, pageSize, name, status });
  const { mutateAsync: deleteTask } = useDeleteTask();
  const { element: modalElement, setModalParams } = useTaskConfigModal({
    handleOnFinish: () => refreshQuery(TASK_LIST_KEY),
  });

  const tasks = data?.data ?? [];
  const total = data?.total ?? 0;

  const handleCreate = () => {
    setModalParams({ open: true, title: '新建任务', modalActionType: ModalActionType.CREATE });
  };

  const handleEdit = (task: FastAPI.Task) => {
    setModalParams({
      open: true,
      title: '编辑任务',
      modalActionType: ModalActionType.EDIT,
      initialValues: task,
    });
  };

  const handleDelete = (task: FastAPI.Task) => {
    modal.confirm({
      title: '确认删除该任务？',
      content: task.name,
      onOk: async () => {
        await deleteTask(task.id);
        message.success('删除成功');
      },
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">任务卡片</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Input.Search
            placeholder="按名称搜索"
            allowClear
            className="w-55"
            onSearch={(v) => {
              setName(v);
              setPage(1);
            }}
          />
          <Select
            placeholder="按状态筛选"
            allowClear
            className="w-40"
            options={STATUS_OPTIONS}
            value={status}
            onChange={(v) => {
              setStatus(v);
              setPage(1);
            }}
          />
          <Button type="primary" icon={<Plus className="size-4" />} onClick={handleCreate}>
            新建任务
          </Button>
        </div>
      </div>

      <Spin spinning={isFetching}>
        {tasks.length === 0 ? (
          <Empty className="py-16" />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tasks.map((task) => (
              <TaskCardItem key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <Pagination
            current={page}
            pageSize={pageSize}
            total={total}
            showSizeChanger
            pageSizeOptions={[12, 24, 48]}
            showTotal={(t) => `共 ${t} 条`}
            onChange={(p, ps) => {
              setPage(p);
              setPageSize(ps);
            }}
          />
        </div>
      </Spin>

      {modalElement}
    </div>
  );
};

export default TaskCard;

export const handle = {
  name: '任务卡片',
};
