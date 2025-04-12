export type MediaRepository = {
  uploadFile(file: File): Promise<string>;
};
