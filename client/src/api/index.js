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
export const createFolder = (newFolder) => API.folder('/folders', newFolder);
export const updateFolder = (id, updatedFolder) => API.patch(`/folders/${id}`, updatedFolder);
export const deleteFolder = (id) => API.delete(`/folders/${id}`);

export const signIn = (formData) => API.folder('/user/signin', formData);
export const signUp = (formData) => API.folder('/user/signup', formData);