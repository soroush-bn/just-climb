export interface SegmentationResult {
  holds_detected: number;
  data: Array<{ polygon: number[][] }>;
}

export const SegmentationRepository = {
  async analyzeImage(file: File): Promise<SegmentationResult> {
    const formData = new FormData();
    formData.append('file', file);

    // Calling your live AWS EC2 FastAPI server
    const response = await fetch('http://ec2-35-182-4-62.ca-central-1.compute.amazonaws.com:8000/api/v1/segment-holds', {
      method: 'POST',
      body: formData,
      // Note: We do NOT set 'Content-Type' here. 
      // The browser automatically sets it to 'multipart/form-data' with the correct boundary when passing a FormData object.
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  }
};