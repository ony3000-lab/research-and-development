import type { MediaRepository } from '../ports/MediaRepository';

export class MediaService {
  constructor(private mediaRepository: MediaRepository) {}

  uploadFile(file: File) {
    return this.mediaRepository.uploadFile(file);
  }
}
