import type { MediaRepository } from '../../application/ports/MediaRepository';
import { api } from './base';

export const mediaApi: MediaRepository = {
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await api.post<{ url: string }>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.url;
  },
};
