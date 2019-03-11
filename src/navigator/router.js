import CampaignUpdate from 'super/CampaignUpdate';
import CustomerCreate from 'super/CustomerCreate';
import CustomerUpdate from 'super/CustomerUpdate';

export default [
  {
    name: 'Update',
    url: '/campaign/:id/update',
    target: CampaignUpdate,
  },
  {
    name: 'Create',
    url: '/customer/create',
    target: CustomerCreate,
  },
  {
    name: 'Update',
    url: '/customer/:id/update',
    target: CustomerUpdate,
  },
];
