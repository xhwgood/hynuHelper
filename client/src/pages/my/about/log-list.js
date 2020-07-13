const logList = [
  {
    date: '2020年7月13日',
    version: 'V1.7.1',
    content: `部分页面颜色（暗黑模式）优化；点击logo会跳转至关于我的衡师。`
  },
  {
    date: '2020年7月4日',
    version: 'V1.7.0',
    content: `暗黑模式适配；获取成绩后再进入成绩页的bug修复；找人页搜索框设为自动聚焦；毕业设计将会保存数据和滚动位置；校园卡账单数据保存，可下拉刷新，提示更加友好；部分细节优化。`
  },
  {
    date: '2020年6月26日',
    version: 'V1.6.7',
    content: `保存考级成绩；查找页按学号查找时可任意输入；在假期时课表页的bug修复。`
  },
  {
    date: '2020年6月19日',
    version: 'V1.6.6',
    content: `所有密码输入框增加可见按钮（校园卡交易密码未增加），图书馆学号输入框可任意输入。`
  },
  {
    date: '2020年6月12日',
    version: 'V1.6.5',
    content: `课程表页开关设置将会弹出提示；成绩页行距调小，考级成绩排序改为按时间降序。`
  },
  {
    date: '2020年6月6日',
    version: 'V1.6.4',
    content: `百宝箱顺序调整；图书馆添加当前借阅信息，部分bug修复；我的背景图片bug修复，部分细节优化；校园卡刷新余额功能优化。`
  },
  {
    date: '2020年5月31日',
    version: 'V1.6.3',
    content: `考级页添加没有考级记录的提示；部分文案优化；我的页面顶部图片可以点击更换；修复课程表页修改学期第一天后不会滚动日期的bug。`
  },
  {
    date: '2020年5月24日',
    version: 'V1.6.2',
    content: `增加天气图标，图标不再缩放；增加校园卡相关提示；部分细节优化。`
  },
  {
    date: '2020年5月22日',
    version: 'V1.6.1',
    content: `更改天气接口，提示更加准确；校园卡充值前后的提示更加友好，余额变幻速度加快；成绩页添加提示，添加考级成绩查询页面；增加图书馆历史借阅过滤功能。`
  },
  {
    date: '2020年5月19日',
    version: 'V1.6.0',
    content: `优化教务处的功能流程；选修课的退选提示优化为弹框提示；关于和更新日志合并为“关于我的衡师”；添加公告功能。`
  },
  {
    date: '2020年5月17日',
    version: 'V1.5.3',
    content: `优化部分读写内存的情况，减少用户的等待；找人页按姓名查找的bug修复。`
  },
  {
    date: '2020年5月15日',
    version: 'V1.5.2',
    content: `因校园卡APP限制，删除校园卡账单的收入显示，同时优化账单的上划加载；找人页bug修复。`
  },
  {
    date: '2020年5月12日',
    version: 'V1.5.1',
    content: `课程表页：设置文字提示更友好，“添加课程”功能的bug修复，“隐藏非本周”课程的bug修复；校园卡金额将动态变化，体验更友好。`
  },
  {
    date: '2020年5月8日',
    version: 'V1.5.0',
    content: `课程表顶部信息置顶，增加“添加课程”的功能；我的页面图标优化；百宝箱页顶部将显示添加的考试安排；优化成绩的数据获取、添加选修课缺考的情况；选修课功能重新开放，入口关闭时可查询已选选修课；更新日志页优化。`
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
    content: `课表页获取课程的提示更友好；成绩页可以滑动切换学期；清除缓存后将直接重载小程序；校园卡账单页布局优化；所有表单/输入框可使用软键盘完成按钮。`
  },
  {
    date: '2020年4月11日',
    version: 'V1.4.4',
    content: `课程表页添加颜色；百宝箱页未开放的功能提示更友好；意见反馈改为联系客服形式。`
  },
  {
    date: '2020年4月8日',
    version: 'V1.4.3',
    content: `图书馆页bug修复；校园卡账单页改版；寻课功能改为宿舍报修功能，但尚未开放。`
  },
  {
    date: '2020年4月6日',
    version: 'V1.4.2',
    content: `课程表页可查看其它星期课程，课表滑动时，周指示联动；毕业设计页开放；部分细节优化。`
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
    content: `教务处的报错提示更加友好；“我的”页面细节优化。`
  },
  {
    date: '2020年3月27日',
    version: 'V1.1.0',
    content:
      '修复查看课程详情时图标没显示的bug；调整百宝箱页面功能顺序；选修课排序改为已选人数从多到少。'
  }
]

export default logList
