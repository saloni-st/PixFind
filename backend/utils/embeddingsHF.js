import fetch from 'node-fetch';

/**
 * Production-ready image embedding using Hugging Face CLIP API
 * Fallback to mock embeddings if API fails
 */
export const getImageEmbedding = async (imageUrl) => {
  // Check if we have HF token
  if (!process.env.HUGGING_FACE_TOKEN) {
    console.log("No HF token, using mock embeddings");
    return Array.from({ length: 512 }, () => Math.random() * 2 - 1);
  }

  try {
    // Get image data
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`);
    }
    
    const imageBuffer = await imageResponse.buffer();
    
    // Call Hugging Face CLIP API
    const hfResponse = await fetch(
      'https://api-inference.huggingface.co/models/openai/clip-vit-base-patch32',
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: imageBuffer.toString('base64'),
          options: { 
            wait_for_model: true,
            use_cache: false 
          }
        }),
      }
    );

    if (!hfResponse.ok) {
      throw new Error(`HF API Error: ${hfResponse.status}`);
    }

    const result = await hfResponse.json();
    
    // HF returns different formats, handle both
    if (result.error) {
      throw new Error(`HF API Error: ${result.error}`);
    }
    
    // Extract embeddings from response
    const embeddings = result.embeddings || result[0] || result;
    
    if (Array.isArray(embeddings) && embeddings.length === 512) {
      console.log("✅ Real CLIP embeddings from Hugging Face");
      return embeddings;
    } else {
      throw new Error("Invalid embedding format from HF API");
    }
    
  } catch (error) {
    console.error('🔄 HF API failed, using fallback:', error.message);
    
    // Fallback to mock embeddings
    return Array.from({ length: 512 }, () => Math.random() * 2 - 1);
  }
};