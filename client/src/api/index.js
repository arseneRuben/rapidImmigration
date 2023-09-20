import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});

export const fetchFolder = (id) => API.get(`/folders/${id}`);
export const fetchFolders = (page) => API.get(`/folders`);
export const fetchFolderByClient = (name) => API.get(`/folders/creator?name=${name}`);
export const fetchFolderByConsultant = (name) => API.get(`/folders/consultant?name=${name}`);
export const fetchFoldersBySearch = (searchQuery) => API.get(`/folders/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createFolder = (newFolder) => API.post('/folders', newFolder);
export const updateFolder = (id, updatedFolder) => API.patch(`/folders/${id}`, updatedFolder);
export const deleteFolder = (id) => API.delete(`/folders/${id}`);

export const fetchPrograms = (page) => API.get(`/programs`);
export const fetchProgram = (id) => API.get(`/programs/${id}`);
export const fetchProgramByClient = (name) => API.get(`/programs/creator?name=${name}`);
export const createProgram = (newProgram) => API.post('/programs', newProgram);
export const updateProgram = (id, updatedProgram) => API.patch(`/programs/${id}`, updatedProgram);
export const deleteProgram = (id) => API.delete(`/programs/${id}`);
export const likeProgram = (id) => API.patch(`/programs/${id}/likeProgram`);
export const comment = (value, id) => API.post(`/programs/${id}/commentProgram`, { value });




export const signIn = (formData) => API.folder('/user/signin', formData);
export const signUp = (formData) => API.folder('/user/signup', formData);