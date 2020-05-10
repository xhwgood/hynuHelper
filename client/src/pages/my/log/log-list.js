const logList = [
  {
    date: '2020年5月11日',
    version: 'V1.5.1',
    content: `课程表页：设置文字提示更友好，“添加课程”功能的bug修复，“隐藏非本周”课程的bug修复；校园卡金额将动态变化，体验更友好。`
  },
  {
    date: '2020年5月8日',
    version: 'V1.5.0',
    content: `课程表顶部信息会一直置顶，增加“添加课程”的功能；我的页面图标优化；百宝箱页顶部将显示添加的考试安排；优化成绩的数据获取、添加选修课缺考的情况；选修课功能重新开放，入口关闭时可查询已选选修课；更新日志页优化。`
  },
  {
    date: '2020年5月2日',
    version: 'V1.4.7',
    content: `课程表/我的/找人页优化；教务处重置密码的提示改为模态框形式。`
  },
  {
    date: '2020年4月20日',
    version: 'V1.4.6',
    content: `校园卡账单优化；修改学期第一天的bug修复；找人页优化。`
  },
  {
    date: '2020年4月16日',
    version: 'V1.4.5',
    content: `课表页获取课程的提示更友好；成绩页可以左右滑动切换学期；清除缓存后将直接重载小程序；校园卡账单页布局优化；所有表单/输入框可使用软键盘完成按钮。`
  },
  {
    date: '2020年4月11日',
    version: 'V1.4.4',
    content: `课程表页添加颜色；百宝箱页未开放的功能提示更友好；意见反馈改为联系客服的形式。`
  },
  {
    date: '2020年4月8日',
    version: 'V1.4.3',
    content: `图书馆页bug修复；校园卡账单页改版；寻课功能改为宿舍报修功能，但尚未开放。`
  },
  {
    date: '2020年4月6日',
    version: 'V1.4.2',
    content: `课程表页可查看其它星期课程，课表滑动时，周指示自动联动；毕业设计页开放；部分细节优化。`
  },
  {
    date: '2020年4月4日',
    version: 'V1.4.1',
    content: `查成绩页改版，且可查看已修学分；找人页搜索条优化调整；部分bug修复。`
  },
  {
    date: '2020年4月1日',
    version: 'V1.4.0',
    content: `全面对接南岳学院教务处；因微信限制，关闭CET查询功能；修复已登录状态下获取课程失败的bug；修复图书馆登录错误时的bug；部分细节优化。`
  },
  {
    date: '2020年3月30日',
    version: 'V1.3.2',
    content: `课程表页溢出文字隐藏；百宝箱页减少预请求次数。`
  },
  {
    date: '2020年3月30日',
    version: 'V1.3.1',
    content: `修复部分同学获取课程失败的bug；修复课表页设置没有保存的bug/切换学期的bug/课程颜色增加/溢出文字隐藏；修复切换tab页或隐藏小程序时模态框没有关闭的bug；选修课页按钮优化。`
  },
  {
    date: '2020年3月29日',
    version: 'V1.3.0',
    content: `百宝箱页面改版；云函数超时时间改为20秒（20秒已为上限，请尽量在网络流畅时使用）；教务处登录页验证码不再自动清空；成绩查询页优化，bug修复。`
  },
  {
    date: '2020年3月28日',
    version: 'V1.2.0',
    content: `部分页面优化；云函数超时时间改为10秒；选修课列表百分比保留整数；分享bug修复，非隐私页面均可转发；百宝箱页功能顺序调整；选修课页选课成功后改为弹窗提示；校园卡登录提示更加友好。`
  },
  {
    date: '2020年3月27日',
    version: 'V1.1.2',
    content: `教务处的报错提示更加友好；”我的“页面细节优化。`
  },
  {
    date: '2020年3月27日',
    version: 'V1.1.0',
    content:
      '修复查看课程详情时图标没显示的bug；调整百宝箱页面功能顺序；选修课排序改为已选人数从多到少。'
  }
]

export default logList
