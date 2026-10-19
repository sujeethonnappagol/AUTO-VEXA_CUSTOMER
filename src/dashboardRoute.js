export const dashboardPath = role => ({
  admin: '/admin/dashboard',
  vendor: '/vendor/dashboard',
  customer: '/customer/dashboard',
}[role] || '/login');
