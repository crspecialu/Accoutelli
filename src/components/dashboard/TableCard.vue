<script setup lang="ts">
import CopyLabel from "@/components/common/CopyLabel.vue";
const loading = ref(true);

const headers = [
  // { text: "Order Id", align: "start", value: "id" },
  // {
  //   text: "User",
  //   sortable: false,
  //   value: "user",
  // },
  // { text: "Date", value: "date" },
  // { text: "Company", value: "company" },
  // { text: "Amount", value: "amount" },
  // { text: "Status", value: "status" },
  // { text: "", sortable: false, align: "right", value: "action" },
];
const items = [
  {
    id: "2837",
    user: {
      name: "报价到收款管理",
      email: "借助统一的报价到收款解决方案，对产品、服务、项目、订阅和使用计划等执行一次性和周期性计费，加快新业务模式的计费流程，快速实现商业价值。",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    // date: "2020-05-10",
    // company: "BlobHill",
    // amount: 52877,
    // status: "PAID",
  },
  {
    id: "2838",
    user: {
      name: "资金管理",
      email: "实现实时可视性对于财务管理至关重要。Accoutelli解决方案能够即时提供数据视图，帮助企业降低财务风险。此外，该解决方案还能帮助企业自动执行资金管理任务，管理合规性并访问市场数据等。",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    // date: "2020-05-11",
    // company: "Caprimooner",
    // amount: 2123,
    // status: "PENDING",
  },
  {
    id: "2839",
    user: {
      name: "税务管理",
      email: "政府正在不断出台新的法律法规，推动数据的数字化和透明化。Accoutelli解决方案不仅支持本地合规性，还能帮助企业实现流程自动化，制定更明智的税务决策，从而减轻税务管理负担。",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    // date: "2020-05-11",
    // company: "CatLovers",
    // amount: 12313,
    // status: "PENDING",
  },
  {
    id: "2840",
    user: {
      name: "会计与财务结算",
      email: "对账与结算是财务管理流程中最繁琐的环节，Accoutelli借助久经验证的财务实践以及生成式AI技术，简化对账和合并流程，并加快结算速度。此外，企业还可以简化合规管理，确保财务报告符合法规要求。",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    // date: "2020-05-12",
    // company: "IndieCoolers",
    // amount: 9873,
    // status: "PAID",
  },
  {
    id: "2841",
    user: {
      name: "财务计划与分析 (FP&A)",
      email: "财务规划是财务管理的第一步，Accoutelli利用财务计划、预算编制和预测功能，提高整个企业的敏捷性。Accoutelli突破传统界限，能够与不同业务部门的 Accoutelli云应用进行实时集成。",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    // date: "2020-05-13",
    // company: "CandyLooove",
    // amount: 29573,
    // status: "PAID",
  },
];

const open = (item) => {};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <!-- loading spinner -->
  <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h6 class="text-h6 px-5 pt-5 d-flex align-center font-weight-bold">
      <span class="flex-fill font-weight-bold">Table</span>
    </h6>
    <perfect-scrollbar style="height: 400px">
      <v-table class="pa-3">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.text">
              {{ header.text }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="font-weight-bold">
              <copy-label :text="`# ${item.id}`" />
            </td>
            <td>
              <div class="d-flex align-center py-2">
                <v-avatar size="40" class="elevation-1 grey lighten-3">
                  <img :src="item.user.avatar" />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.user.name }}</div>
                  <div class="text-caption">
                    <copy-label :text="item.user.email" />
                  </div>
                </div>
              </div>
            </td>
            <td>{{ item.date }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.amount }}</td>
            <td class="font-weight-bold">
              <div v-if="item.status === 'PENDING'">
                <v-icon size="small" color="warning">mdi-circle-medium</v-icon>
                <span>Pending</span>
              </div>
              <div v-if="item.status === 'PAID'">
                <v-icon size="small" color="success">mdi-circle-medium</v-icon>
                <span>Paid</span>
              </div>
            </td>
            <td>
              <v-btn
                size="small"
                variant="text"
                icon="mdi-open-in-new"
                @click="open(item)"
              >
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss" scoped></style>
