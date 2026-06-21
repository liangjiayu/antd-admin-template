import { ArrowRight, LayoutGrid, Sparkles, Table2, TriangleAlert } from 'lucide-react';
import { Link } from 'react-router';

const TECH_STACK = ['React Router', 'Ant Design', 'Tailwind CSS', 'TanStack Query', 'TypeScript'];

const FEATURES = [
  {
    path: '/crud-table',
    name: 'CRUD 表格',
    desc: '内置增删改查、搜索与分页的标准列表页范式',
    icon: Table2,
  },
  {
    path: '/task-card',
    name: '任务卡片',
    desc: '卡片化的数据展示与筛选，适配看板类场景',
    icon: LayoutGrid,
  },
  {
    path: '/exception/404',
    name: '异常页',
    desc: '开箱即用的 403 / 404 / 500 异常页面',
    icon: TriangleAlert,
  },
];

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 px-8 py-10 text-white shadow-sm">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="size-3.5" />
          Antd Admin Template v2.0
        </div>
        <h1 className="mb-2 text-2xl font-semibold">欢迎使用 Antd Admin Template</h1>
        <p className="max-w-2xl text-sm/6 text-white/85">
          一个基于 React Router、Ant Design 与 Tailwind CSS 的中后台管理模板，
          已内置布局、权限、CRUD 与数据请求等常用能力，让你专注于业务本身。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-base font-semibold text-gray-800">功能导览</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.path}
                to={feature.path}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <ArrowRight className="size-4 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </div>
                <div className="mt-4 font-medium text-gray-800">{feature.name}</div>
                <p className="mt-1 text-sm/6 text-gray-500">{feature.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const handle = {
  name: '首页',
};
