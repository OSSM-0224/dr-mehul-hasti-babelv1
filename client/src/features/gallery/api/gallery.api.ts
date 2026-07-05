import api from "../../../app/axios/axios.js";
import { API_ENDPOINTS } from "../../../app/axios/endpoints.js";

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  stats: string;
}

export const galleryApi = {
  getGallery: async (): Promise<GalleryItem[]> => {
    const response = await api.get<GalleryItem[]>(API_ENDPOINTS.GALLERY);
    return response.data;
  },
};
