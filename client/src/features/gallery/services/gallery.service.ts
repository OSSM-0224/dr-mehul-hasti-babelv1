import { galleryApi, GalleryItem } from "../api/gallery.api.js";

export const galleryService = {
  getGallery: async (): Promise<GalleryItem[]> => {
    return galleryApi.getGallery();
  },
};
