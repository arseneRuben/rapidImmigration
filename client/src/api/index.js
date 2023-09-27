import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});

export const fetchCustomer = (id) => API.get(`/customers/${id}`);
export const fetchCustomers = (page) => API.get(`/customers`);
export const fetchCustomerByClient = (name) => API.get(`/customers/creator?name=${name}`);
export const fetchCustomerByConsultant = (name) => API.get(`/customers/consultant?name=${name}`);
export const fetchCustomersBySearch = (searchQuery) => API.get(`/customers/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createCustomer = (newCustomer) => API.post('/customers', newCustomer);
export const updateCustomer = (id, updatedCustomer) => API.patch(`/customers/${id}`, updatedCustomer);
export const deleteCustomer = (id) => API.delete(`/customers/${id}`);

export const fetchPrograms = (page) => API.get(`/programs`);
export const fetchProgram = (id) => API.get(`/programs/${id}`);
export const fetchProgramByClient = (name) => API.get(`/programs/creator?name=${name}`);
export const createProgram = (newProgram) => API.post('/programs', newProgram);
export const updateProgram = (updatedProgram) => API.patch(`/programs/${updatedProgram.id}`, updatedProgram);
export const deleteProgram = (id) => API.delete(`/programs/${id}`);
export const likeProgram = (id) => API.patch(`/programs/${id}/likeProgram`);
export const comment = (value, id) => API.post(`/programs/${id}/commentProgram`, { value });
export const deleteComment = (id) => API.delete(`/programs/${id}`);

export const fetchFolders = (page) => API.get(`/folders`);
export const fetchFolder = (id) => API.get(`/folders/${id}`);
export const fetchFoldersByClient = (clientId) => API.get(`/folders/client/${clientId}`);
export const fetchFoldersByConsultant = (consultantId) => API.get(`/folders/consultant/${consultantId}`);
export const fetchFoldersByProgram = (programId) => API.get(`/folders/program/${programId}`);
export const fetchFoldersByCustomer = (customerId) => API.get(`/folders/customer/${customerId}`);

export const createFolder = (newFolder) => API.post('/folders', newFolder);
export const updateFolder = (updatedFolder) => API.patch(`/folders/${updatedFolder.id}`, updatedFolder);
export const deleteFolder = (id) => API.delete(`/folders/${id}`);






export const signIn = (formData) => API.user('/user/signin', formData);
export const signUp = (formData) => API.user('/user/signup', formData);