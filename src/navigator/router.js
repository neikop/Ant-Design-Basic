import CampaignCreate from 'super/CampaignCreate';
import CampaignScript from 'super/CampaignScript';
import Customer from 'super/Customer';
import Report from 'super/Report';

export default [
  {
    url: '/campaign/create',
    target: CampaignCreate,
  },
  {
    url: '/campaign/script',
    target: CampaignScript,
  },
  {
    url: '/customer',
    target: Customer,
  },
  {
    url: '/report',
    target: Report,
  },
];
