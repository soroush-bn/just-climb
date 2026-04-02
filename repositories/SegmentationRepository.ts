export interface SegmentationResult {
  holds_detected: number;
  data: Array<{ polygon: number[][] }>;
}

export const SegmentationRepository = {
  async analyzeImage(file: File): Promise<SegmentationResult> {
    const formData = new FormData();
    formData.append('file', file);

    // CHANGE HERE: We now call our own secure Next.js API route!
    const response = await fetch('/api/segment', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  }
};