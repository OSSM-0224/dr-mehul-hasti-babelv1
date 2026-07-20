import { SMILE_GALLERY } from "@/src/features/shared/constants/constants";
import type { GalleryItem } from "@/src/types/index.js";

export function useGallery() {
  const gallery = SMILE_GALLERY as GalleryItem[];
  return {
    gallery,
    loading: false,
    error: null,
    getGalleryList: () => {},
  };
}
