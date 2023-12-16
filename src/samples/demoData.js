import TheFormHeader from "../components2/TheFormHeader/index.vue";

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
        prop: "hobby",
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
        type: "el-date-picker",
        prop: "time",
        label: "出生日期",
        props: {
          placeholder: "选择日期",
          "value-format": "yyyy-MM-dd",
        },
      },
      {
        type: "el-cascader",
        prop: "cascader",
        label: "级联",
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
  cascader: [
    {
      value: "zhinan",
      label: "指南",
      children: [
        {
          value: "shejiyuanze",
          label: "设计原则",
          children: [
            {
              value: "yizhi",
              label: "一致",
            },
            {
              value: "fankui",
              label: "反馈",
            },
            {
              value: "xiaolv",
              label: "效率",
            },
            {
              value: "kekong",
              label: "可控",
            },
          ],
        },
        {
          value: "daohang",
          label: "导航",
          children: [
            {
              value: "cexiangdaohang",
              label: "侧向导航",
            },
            {
              value: "dingbudaohang",
              label: "顶部导航",
            },
          ],
        },
      ],
    },
    {
      value: "zujian",
      label: "组件",
      children: [
        {
          value: "basic",
          label: "Basic",
          children: [
            {
              value: "layout",
              label: "Layout 布局",
            },
            {
              value: "color",
              label: "Color 色彩",
            },
            {
              value: "typography",
              label: "Typography 字体",
            },
            {
              value: "icon",
              label: "Icon 图标",
            },
            {
              value: "button",
              label: "Button 按钮",
            },
          ],
        },
        {
          value: "form",
          label: "Form",
          children: [
            {
              value: "radio",
              label: "Radio 单选框",
            },
            {
              value: "checkbox",
              label: "Checkbox 多选框",
            },
            {
              value: "input",
              label: "Input 输入框",
            },
            {
              value: "input-number",
              label: "InputNumber 计数器",
            },
            {
              value: "select",
              label: "Select 选择器",
            },
            {
              value: "cascader",
              label: "Cascader 级联选择器",
            },
            {
              value: "switch",
              label: "Switch 开关",
            },
            {
              value: "slider",
              label: "Slider 滑块",
            },
            {
              value: "time-picker",
              label: "TimePicker 时间选择器",
            },
            {
              value: "date-picker",
              label: "DatePicker 日期选择器",
            },
            {
              value: "datetime-picker",
              label: "DateTimePicker 日期时间选择器",
            },
            {
              value: "upload",
              label: "Upload 上传",
            },
            {
              value: "rate",
              label: "Rate 评分",
            },
            {
              value: "form",
              label: "Form 表单",
            },
          ],
        },
        {
          value: "data",
          label: "Data",
          children: [
            {
              value: "table",
              label: "Table 表格",
            },
            {
              value: "tag",
              label: "Tag 标签",
            },
            {
              value: "progress",
              label: "Progress 进度条",
            },
            {
              value: "tree",
              label: "Tree 树形控件",
            },
            {
              value: "pagination",
              label: "Pagination 分页",
            },
            {
              value: "badge",
              label: "Badge 标记",
            },
          ],
        },
        {
          value: "notice",
          label: "Notice",
          children: [
            {
              value: "alert",
              label: "Alert 警告",
            },
            {
              value: "loading",
              label: "Loading 加载",
            },
            {
              value: "message",
              label: "Message 消息提示",
            },
            {
              value: "message-box",
              label: "MessageBox 弹框",
            },
            {
              value: "notification",
              label: "Notification 通知",
            },
          ],
        },
        {
          value: "navigation",
          label: "Navigation",
          children: [
            {
              value: "menu",
              label: "NavMenu 导航菜单",
            },
            {
              value: "tabs",
              label: "Tabs 标签页",
            },
            {
              value: "breadcrumb",
              label: "Breadcrumb 面包屑",
            },
            {
              value: "dropdown",
              label: "Dropdown 下拉菜单",
            },
            {
              value: "steps",
              label: "Steps 步骤条",
            },
          ],
        },
        {
          value: "others",
          label: "Others",
          children: [
            {
              value: "dialog",
              label: "Dialog 对话框",
            },
            {
              value: "tooltip",
              label: "Tooltip 文字提示",
            },
            {
              value: "popover",
              label: "Popover 弹出框",
            },
            {
              value: "card",
              label: "Card 卡片",
            },
            {
              value: "carousel",
              label: "Carousel 走马灯",
            },
            {
              value: "collapse",
              label: "Collapse 折叠面板",
            },
          ],
        },
      ],
    },
    {
      value: "ziyuan",
      label: "资源",
      children: [
        {
          value: "axure",
          label: "Axure Components",
        },
        {
          value: "sketch",
          label: "Sketch Templates",
        },
        {
          value: "jiaohu",
          label: "组件交互文档",
        },
      ],
    },
  ],
};
export const getDetail = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        gender: "2",
        hobby: ["1", "3"],
        race: "2",
        skill: ["2"],
        userName: "abc",
        cus1: "",
      });
    }, 500);
  });
};

export const getHobby = async () => {
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

export const querySchemes = (() => {
  const arr = scheme[0].items;
  const props = ["userName", "race", "time"];
  const items = props
    .map((k) => {
      const tmp = arr.find((t) => t.prop === k);
      return tmp;
    })
    .filter((t) => !!t);
  return [
    {
      items,
    },
  ];
})();

export const tableSchemes = [
  {
    label: "姓名",
    prop: "userName",
  },
  {
    label: "性别",
    prop: "gender",
    dict: true,
    // 若dictName与prop相同,则可不用传dictName
    // dictName: "gender",
  },
  {
    label: "年龄",
    prop: "age",
  },
  {
    label: "爱好",
    prop: "hobby",
    dict: true,
    // dictName: "hobby",
  },
  {
    label: "擅长",
    prop: "skill",
    dict: true,
    dictName: "skill",
  },
  {
    label: "出生日期",
    prop: "birthDay",
  },
];

export const tableData = (() => {
  return {
    code: 200,
    data: {
      data: [
        {
          id: 111,
          userName: "张三",
          gender: "1",
          age: 20,
          hobby: ["1", "2"],
          skill: "1",
          birthDay: "2020-12-12",
        },
        {
          id: 222,
          userName: "李四",
          gender: "1",
          age: 24,
          hobby: ["1"],
          skill: "2",
          birthDay: "2020-12-13",
        },
        {
          id: 333,
          userName: "随机",
          gender: "2",
          age: 26,
          hobby: ["1"],
          skill: "1",
          birthDay: "2020-12-14",
        },
      ],
      total: 25,
    },
  };
})();
