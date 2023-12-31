import axios from 'axios';
//export const baseURL = 'http://localhost:8080';
export const baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080';
const API = axios.create({ baseURL:`${baseURL}/api`});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});
export const fetchUsers = () => API.get(`/users`);
export const toggle = (id) => API.patch(`/users/${id}`);
export const deleteUser = (id) => API.delete(`/users/${id}`);



export const fetchCustomer = (id) => API.get(`/customers/${id}`);
export const fetchCustomers = (page) => API.get(`/customers?page=${page}`);
export const fetchCustomerByClient = (name) => API.get(`/customers/creator?name=${name}`);
export const fetchCustomerByConsultant = (name) => API.get(`/customers/consultant?name=${name}`);
export const fetchCustomersBySearch = (searchQuery) => API.get(`/customers/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createCustomer = (newCustomer) => API.post('/customers', newCustomer);
export const updateCustomer = (id, updatedCustomer) => API.patch(`/customers/${id}`, updatedCustomer);
export const deleteCustomer = (id) => API.delete(`/customers/${id}`);

export const fetchPrograms = (page) => API.get(`/programs?page=${page}`);
export const fetchProgram = (id) => API.get(`/programs/${id}`);
export const fetchProgramByClient = (name) => API.get(`/programs/creator?name=${name}`);
export const createProgram = (newProgram) => API.post('/programs', newProgram);
export const updateProgram = (updatedProgram) => API.patch(`/programs/${updatedProgram.id}`, updatedProgram);
export const deleteProgram = (id) => API.delete(`/programs/${id}`);
export const likeProgram = (id) => API.patch(`/programs/${id}/likeProgram`);
export const comment = (value, id) => API.post(`/programs/${id}/commentProgram`, { value });
export const deleteComment = (id) => API.delete(`/programs/${id}`);

export const fetchFolders = (page, filter="",orderBy="id",newOrder="asc" ) => API.get(`/folders?page=${page}&filter=${filter}&orderBy=${orderBy}&newOrder=${newOrder}`);
export const fetchFolder = (id) => API.get(`/folders/${id}`);
export const fetchFoldersByClient = (clientId) => API.get(`/folders/client/${clientId}`);
export const fetchFoldersByConsultant = (consultantId) => API.get(`/folders/consultant/${consultantId}`);
export const fetchFoldersByProgram = (programId) => API.get(`/folders/program/${programId}`);
export const fetchFoldersByCustomer = (customerId) => API.get(`/folders/customer/${customerId}`);

export const createFolder = (newFolder) => API.post('/folders', newFolder);
export const updateFolder = (updatedFolder) => API.patch(`/folders/${updatedFolder.id}`, updatedFolder);
export const deleteFolder = (id) => API.delete(`/folders/${id}`);
export const deleteFoldersByCustomer = (customerId) => API.delete(`/folders/customer/${customerId}`);



export const insertOthers = (newOther) => API.post('/others', newOther);
export const updateOthers = (updatedOther) => API.patch(`/others/${updatedOther.id}`, updatedOther);
export const deleteOthers = (id) => API.delete(`/others/${id}`);
export const deleteOthersByCustomer = (customerId) => API.delete(`/others/customer/${customerId}`);

export const fetchOthersByCustomer = (customerId) => API.get(`/others/customer/customerId=${customerId}`);

export const createQuote = (newQuote) => API.post('/quotes', newQuote);
export const updateQuote = (updatedQuote) => API.patch(`/quotes/${updatedQuote.id}`, updatedQuote);
export const deleteQuote = (id) => API.delete(`/quotes/${id}`);




export const signIn = (formData) => API.user('/user/signin', formData);
export const signUp = (formData) => API.user('/user/signup', formData);