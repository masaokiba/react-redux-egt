import r from '../../../database/rethinkdriver';

export const getLeadByEmail = async(email) => {
  const leads = await r.table('leads').getAll(email, {index: 'email'}).limit(1).run();
  return leads[0];
};

export const getLeadById = async(id) => {
  const leads = await r.table('leads').getAll(id, {index: 'id'}).limit(1).run();
  return leads[0];
};
