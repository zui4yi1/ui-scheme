import TheFormHeader from "./components2/TheFormHeader/index.vue";

export const scheme = [
  {
    head: TheFormHeader,
    headProps: {
      title: "个人信息",
    },
    items: [
      {
        type: "el-input",
        prop: "userName",
        label: "用户名",
        rules: [
          {
            required: true,
            message: "该项不可为空",
          },
        ],
      },
      {
        type: "el-radio",
        prop: "gender",
        label: "性别",
      },
      {
        type: "el-checkbox",
        prop: "hobits",
        label: "爱好",
      },
      {
        type: "el-select",
        prop: "race",
        label: "民族",
      },
      {
        type: "el-select",
        prop: "skill",
        label: "特长",
        props: {
          multiple: true,
        },
      },
      {
        type: "TheCom1",
        prop: "cus1",
        isCustom: true,
        label: "自定义组件1",
      },
    ],
  },
  {
    head: TheFormHeader,
    headProps: {
      title: "工作经历",
    },
    items: [
      {
        type: "el-input",
        prop: "company",
        label: "公司名",
      },
      {
        type: "el-switch",
        prop: "agreement",
        label: "同意",
      },
    ],
  },
];
export const dicts = {
  gender: [
    { label: "男", value: "1" },
    { label: "女", value: "2" },
  ],
  skill: [
    { label: "语文", value: "1" },
    { label: "数学", value: "2" },
    { label: "物理", value: "3" },
  ],
};
export const getDetail = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        gender: "2",
        hobits: ["1", "3"],
        race: "2",
        skill: ["2"],
        userName: "abc",
      });
    }, 500);
  });
};

export const getHobbits = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "篮球", value: "1" },
        { label: "足球", value: "2" },
        { label: "乒乓球", value: "3" },
      ]);
    }, 200);
  });
};

export const getRaces = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "汉族", value: "1" },
        { label: "畬族", value: "2" },
      ]);
    }, 300);
  });
};
