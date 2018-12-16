export default [
  {
    name: 'Home',
    url: '/home',
    icon: 'home',
  },
  {
    title: true,
    name: 'In Bound',
  },
  {
    name: 'Campaign',
    sub: 'campaign',
    icon: 'windows',
    children: [
      {
        name: 'Create',
        url: '/campaign/create',
        icon: 'plus-circle',
      },
      {
        name: 'Schedule',
        url: '/campaign/schedule',
        icon: 'schedule',
      },
      {
        name: 'Script',
        sub: 'script',
        icon: 'pie-chart',
        children: [
          {
            name: 'Question',
            url: '/campaign/script/question',
            icon: 'question-circle',
          },
          {
            name: 'Answer',
            url: '/campaign/script/answer',
            icon: 'check-circle',
          },
        ],
      },
    ],
  },
  {
    name: 'Report',
    sub: 'report',
    children: [
      {
        name: 'Process',
        url: '/report/process',
        icon: 'code',
      },
      {
        name: 'Scope',
        url: '/report/scope',
        icon: 'shake',
      },
      {
        name: 'Result',
        url: '/report/result',
        icon: 'file-text',
      },
    ],
  },
  {
    title: true,
    name: 'Out Bound',
  },
  {
    name: 'Customer',
    url: '/customer',
    icon: 'user',
  },
  {
    name: 'Ticket',
    url: '/ticket',
    icon: 'tags',
  },
]
