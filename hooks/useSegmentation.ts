import { useState } from 'react';
import { SegmentationRepository, SegmentationResult } from '@/repositories/SegmentationRepository';

export function useSegmentation() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [results, setResults] = useState<SegmentationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Create a local URL so we can show the image immediately before uploading
      setPreviewUrl(URL.createObjectURL(file));
      setResults(null);
      setStatus('IDLE');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setStatus('LOADING');
    setErrorMsg(null);

    try {
      const data = await SegmentationRepository.analyzeImage(selectedFile);
      setResults(data);
      setStatus('SUCCESS');
    } catch (error: any) {
      console.error(error);
      setStatus('ERROR');
      setErrorMsg(error.message || "Failed to analyze image");
    }
  };

  return {
    selectedFile,
    previewUrl,
    status,
    results,
    errorMsg,
    handleFileSelect,
    handleUpload
  };
}