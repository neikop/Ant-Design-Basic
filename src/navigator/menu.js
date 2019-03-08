import CampaignCreate from 'super/CampaignCreate';
import CampaignScript from 'super/CampaignScript';
import CampaignScriptQuestion from 'super/CampaignScriptQuestion';
import Customer from 'super/Customer';
import Report from 'super/Report';
import Home from 'super/Home';

export default [
  {
    name: 'Home',
    icon: 'home',
    url: '/home',
    target: Home,
  },
  {
    title: 1,
    name: 'In Bound',
  },
  {
    name: 'Campaign',
    icon: 'windows',
    url: '/campaign',
    children: [
      {
        name: 'Create',
        icon: 'plus-circle',
        url: '/campaign/create',
        target: CampaignCreate,
      },
      {
        name: 'Schedule',
        icon: 'schedule',
        url: '/campaign/schedule',
      },
      {
        name: 'Script',
        icon: 'copy',
        url: '/campaign/script',
        target: CampaignScript,
        children: [
          {
            name: 'Question',
            icon: 'question-circle',
            url: '/campaign/script/question',
            target: CampaignScriptQuestion,
          },
          {
            name: 'Answer',
            icon: 'check-circle',
            url: '/campaign/script/answer',
          },
        ],
      },
    ],
  },
  {
    name: 'Report',
    url: '/report',
    target: Report,
    children: [
      {
        name: 'Process',
        icon: 'code',
        url: '/report/process',
      },
      {
        name: 'Scope',
        icon: 'shake',
        url: '/report/scope',
      },
      {
        name: 'Result',
        icon: 'file-text',
        url: '/report/result',
      },
    ],
  },
  {
    title: 1,
    name: 'Out Bound',
  },
  {
    name: 'Customer',
    icon: 'user',
    url: '/customer',
    target: Customer,
  },
  {
    name: 'Ticket',
    icon: 'tags',
    url: '/ticket',
  },
];
