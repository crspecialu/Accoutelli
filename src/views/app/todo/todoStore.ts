import { defineStore } from "pinia";
import { Todo } from "./todoTypes";

const todos = [
  {
    id: 1,
    title: "借助前瞻性洞察，释放业务增长潜能",
    detail: "业务模式创新能够帮助企业开辟新的业务增长点，增加现金流，并创造持续的收入来源。借助 预测分析和订阅计费功能，财务管理人员能够准确评估财务影响，并预测实施新的财务管理模式所需的流动资金。",
    completed: false,
    tags: ["work"],
  },
  {
    id: 2,
    title: "推动AI财务管理，实现降本增效",
    detail: "智能 流程自动化是提高速度和效率的关键。财务数字化领域的 人工智能和 机器学习技术能够帮助企业简化运营，优化工作流，提高结算、现金管理、合规报告和控制措施监控流程的效率。",
    completed: false,
    tags: ["work"],
  },
  {
    id: 3,
    title: "践行可持续发展理念的财务管理报告",
    detail: "实时、相关的数据至关重要，能够帮助企业制定明智的决策，SAP财务ERP实时、灵活的报表功能集成了可持续发展指标，能够提供切实可行的洞察，帮助企业有效管理ESG 风险，并支持可持续发展。",
    completed: false,
    tags: ["work"],
  },
  // {
  //   id: 4,
  //   title: "Take a walk",
  //   detail: "Explore the park and enjoy the nature",
  //   completed: false,
  //   tags: ["relaxation"],
  // },
  // {
  //   id: 5,
  //   title: "Meditate",
  //   detail: "Practice mindfulness for 15 minutes",
  //   completed: true,
  //   tags: ["relaxation"],
  // },
  // {
  //   id: 6,
  //   title: "Watch a movie",
  //   detail: "Stream a comedy to lighten the mood",
  //   completed: true,
  //   tags: ["relaxation"],
  // },
  // {
  //   id: 7,
  //   title: "Buy groceries",
  //   detail: "Stock up on fruits, vegetables, and snacks",
  //   completed: true,
  //   tags: ["shopping"],
  // },
  // {
  //   id: 8,
  //   title: "Shop for clothes",
  //   detail: "Look for a new outfit for the weekend",
  //   completed: false,
  //   tags: ["shopping"],
  // },
  // {
  //   id: 9,
  //   title: "Order supplies",
  //   detail: "Get some office essentials for the team",
  //   completed: false,
  //   tags: ["shopping", "relaxation"],
  // },
  // {
  //   id: 10,
  //   title: "Buy gifts",
  //   detail: "Get presents for friends and family",
  //   completed: false,
  //   tags: ["shopping", "relaxation"],
  // },
];

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todList: todos,
    currentLabel: "work",
    labels: [
      {
        id: "work",
        title: "Work",
        color: "orange",
      },
      {
        id: "relaxation",
        title: "Relaxation",
        color: "green",
      },
      {
        id: "shopping",
        title: "Shopping",
        color: "blue",
      },
    ],
  }),

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["todoList"],
      },
    ],
  },

  getters: {
    // Full list of todos
    getTodoList() {
      return this.todList.filter((todo: Todo) => !todo.completed);
    },

    // Completed todos
    getCompletedTodos() {
      return this.todList.filter((todo: Todo) => todo.completed);
    },

    // Specific Label todos
    getLabelTodos() {
      return this.todList.filter(
        (todo: Todo) =>
          todo.tags && todo.tags.includes(this.currentLabel) && !todo.completed
      );
    },
  },
  actions: {
    // Add new todo
    addNewTodo(todo: Todo) {
      todo.id = "_" + Math.random().toString(36).substring(2, 11);
      this.todList.push(todo);
    },
    // update todo
    updateTodo(todo: Todo) {
      const index = this.todList.findIndex((item: Todo) => item.id === todo.id);
      this.todList.splice(index, 1, todo);
    },

    // Delete todo By Id
    deleteTodoById(todoId: string) {
      const index = this.todList.findIndex((todo: Todo) => todo.id === todoId);
      this.todList.splice(index, 1);
    },
  },
});
