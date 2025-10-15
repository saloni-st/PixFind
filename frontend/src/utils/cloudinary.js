export const enhanceCloudinaryUrl = (url) => {
  if (!url || !url.includes('cloudinary.com')) {
    return url;
  }

  if (url.includes('/upload/')) {
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      const transformations = 'q_auto:best,f_auto,dpr_auto,c_fill,g_center';
      return `${parts[0]}/upload/${transformations}/${parts[1]}`;
    }
  }
  
  return url;
};

export const getResponsiveCloudinaryUrl = (url, width = 400, height = 400) => {
  if (!url || !url.includes('cloudinary.com')) {
    return url;
  }

  if (url.includes('/upload/')) {
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      // Add size, quality and format optimizations
      const transformations = `w_${width},h_${height},c_fill,g_center,q_auto:best,f_auto,dpr_auto`;
      return `${parts[0]}/upload/${transformations}/${parts[1]}`;
    }
  }
  
  return url;
};