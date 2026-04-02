'use client';

import { useSegmentation } from '@/hooks/useSegmentation';
import { useEffect, useRef } from 'react';

export default function SegmentationPage() {
  const { 
    selectedFile, previewUrl, status, results, errorMsg, 
    handleFileSelect, handleUpload 
  } = useSegmentation();

  // We use a ref to target the HTML5 Canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- HTML5 CANVAS VISUALIZATION LOGIC ---
  // This replaces your OpenCV cv2.fillPoly and cv2.polylines logic!
  useEffect(() => {
    if (!previewUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load the image into the browser's memory
    const img = new window.Image();
    img.src = previewUrl;
    
    img.onload = () => {
      // 1. Resize canvas to match the exact resolution of the image
      canvas.width = img.width;
      canvas.height = img.height;

      // 2. Draw the base image (Equivalent to cv2.imread)
      ctx.drawImage(img, 0, 0);

      // 3. If we have AI results, draw the polygons
      if (results?.data) {
        // Set the style for our drawing
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; // 30% opacity green fill
        ctx.strokeStyle = '#00ff00';            // Solid green outline
        ctx.lineWidth = 3;

        results.data.forEach((hold) => {
          const pts = hold.polygon;
          if (!pts || pts.length === 0) return;

          // Start drawing the path
          ctx.beginPath();
          ctx.moveTo(pts[0][0], pts[0][1]); // Move to the first coordinate

          // Draw lines to the rest of the coordinates
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i][0], pts[i][1]);
          }

          ctx.closePath(); // Connect the last point back to the first
          ctx.fill();      // Apply the translucent tint
          ctx.stroke();    // Apply the solid outline
        });
      }
    };
  }, [previewUrl, results]); // Re-run this whenever the image or AI results change

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 bg-neutral-900 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-neutral-800 p-8 rounded-2xl shadow-2xl border border-neutral-700">
        
        <h1 className="text-3xl font-bold text-white mb-2">AI Hold Segmentation</h1>
        <p className="text-gray-400 mb-8">Upload a photo of a climbing wall to detect holds using our VQ-VAE model.</p>

        {/* Upload Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileSelect}
            className="flex-1 block w-full text-sm text-gray-400
              file:mr-4 file:py-3 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-bold
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700 transition"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile || status === 'LOADING'}
            className="bg-emerald-500 text-black font-bold py-3 px-8 rounded-full hover:bg-emerald-600 disabled:opacity-50 transition"
          >
            {status === 'LOADING' ? 'Processing...' : 'Run Analysis'}
          </button>
        </div>

        {/* Error State */}
        {status === 'ERROR' && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-lg mb-6">
            {errorMsg}
          </div>
        )}

        {/* Success Details */}
        {status === 'SUCCESS' && results && (
          <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-400 p-4 rounded-lg mb-6 font-medium">
            Analysis Complete! Detected {results.holds_detected} distinct holds.
          </div>
        )}

        {/* The Output Display */}
        {previewUrl && (
          <div className="mt-8 border-2 border-neutral-700 rounded-xl overflow-hidden bg-black flex justify-center">
            {/* 
              We use CSS to scale the canvas to fit the screen, 
              but the internal resolution remains identical to the uploaded image! 
            */}
            <canvas 
              ref={canvasRef} 
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        )}

      </div>
    </main>
  );
}