import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { Play } from "lucide-react";

// Console logging with timestamp for debugging
const logDebug = (message: string) => {
  console.log(`🚀 GALLERY FINAL 2025 VERSION: ${message}`);
};

interface GalleryItem {
  id: string;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  imageUrlEn?: string;
  imageUrlFr?: string;
  videoUrlEn?: string;
  videoUrlFr?: string;
  feature1En: string;
  feature1Fr: string;
  feature2En: string;
  feature2Fr: string;
  priceEn: string;
  priceFr: string;
  contentStatsEn?: string;
  contentStatsFr?: string;
  durationEn?: string;
  durationFr?: string;
  isActive: boolean;
  orderIndex: number;
  staticImageUrlEn?: string;
  staticImageUrlFr?: string;
}

const GallerySection: React.FC = () => {
  const { legacyLanguage } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [showControls, setShowControls] = useState<{[key: string]: boolean}>({});

  // Debug logging
  useEffect(() => {
    logDebug("Component mounted and ready");
    logDebug("Starting gallery initialization with modal system");
  }, []);

  // TEMPORARY: Load gallery data directly to bypass API issues
  const staticGalleryData: GalleryItem[] = [
    {
      id: "1752265760362",
      titleFr: "Vitamine C",
      titleEn: "Our Vitamin Sea",
      descriptionFr: "",
      descriptionEn: "",
      imageUrlFr: "https://supabase.memopyk.org/storage/v1/object/public/memopyk-gallery//1752294172895_Media_0000103__2_.JPG",
      imageUrlEn: "https://supabase.memopyk.org/storage/v1/object/public/memopyk-gallery//1752294172895_Media_0000103__2_.JPG",
      videoUrlFr: "memopyk-gallery/Our vitamin sea rework 2 compressed.mp4",
      videoUrlEn: "memopyk-gallery/Our vitamin sea rework 2 compressed.mp4",
      priceFr: "145 €",
      priceEn: "USD 145",
      orderIndex: 0,
      isActive: true,
      contentStatsEn: "80 photos & 10 videos",
      contentStatsFr: "80 photos & 10 videos",
      durationEn: "2 minutes",
      durationFr: "2 minutes",
      feature1En: "The Client is a wife in a couple, who looks for a special gift for her husband, in the occasion of their wedding anniversary.",
      feature1Fr: "Le Client est une femme dans un couple, qui cherche un cadeau spécial pour son mari, à l'occasion de leur anniversaire de mariage.",
      feature2En: "This film shows a couple's simple trip to the sea in the south of France.",
      feature2Fr: "Ce film montre le voyage simple d'un couple à la mer dans le sud de la France.",
      staticImageUrlEn: "/api/image-proxy/memopyk-gallery/static_image_1752265760362_en.jpg",
      staticImageUrlFr: "/api/image-proxy/memopyk-gallery/static_image_1752265760362_fr.jpg"
    },
    {
      id: "1752256273545",
      titleFr: "Pom le chien",
      titleEn: "Pom the dog",
      descriptionFr: "Pom the French dog",
      descriptionEn: "Pom the English dog",
      imageUrlFr: "http://supabase.memopyk.org:8001/object/public/memopyk-gallery/1752906006396_AAA_002_0000014__3_.jpg",
      imageUrlEn: "http://supabase.memopyk.org:8001/object/public/memopyk-gallery/1752906006396_AAA_002_0000014__3_.jpg",
      videoUrlFr: "memopyk-gallery/Pom Gallery (RAV AAA_001) compressed.mp4",
      videoUrlEn: "memopyk-gallery/Pom Gallery (RAV AAA_001) compressed.mp4",
      priceFr: "490 €",
      priceEn: "USD 550",
      orderIndex: 1,
      isActive: true,
      contentStatsEn: "80 videos & 10 photos",
      contentStatsFr: "800 videos & 100 photos",
      durationEn: "2 min",
      durationFr: "20 minutes",
      feature1En: "Client wanted...",
      feature1Fr: "Le Client voulait",
      feature2En: "The video tells the story...",
      feature2Fr: "La video raconte ...",
      staticImageUrlEn: "/api/image-proxy/memopyk-gallery/static_image_1752256273545_en.jpg",
      staticImageUrlFr: "/api/image-proxy/memopyk-gallery/static_image_1752256273545_fr.jpg"
    },
    {
      id: "1752357028264",
      titleFr: "Safari",
      titleEn: "Safari",
      descriptionFr: "",
      descriptionEn: "",
      imageUrlFr: "http://supabase.memopyk.org:8001/object/public/memopyk-gallery/1752917048084_IMG_9217.JPG",
      imageUrlEn: "http://supabase.memopyk.org:8001/object/public/memopyk-gallery/1752917048084_IMG_9217.JPG",
      videoUrlFr: "memopyk-gallery/safari-1.mp4",
      videoUrlEn: "memopyk-gallery/safari-1.mp4",
      priceFr: "1195 €",
      priceEn: "USD 1195",
      orderIndex: 2,
      isActive: true,
      contentStatsEn: "",
      contentStatsFr: "",
      durationEn: "20 minutes",
      durationFr: "20 minutes",
      feature1En: "The Client went on a trip with some of his friends in a South African safari.",
      feature1Fr: "Le client est parti en voyage avec certains de ses amis dans un safari en Afrique du Sud.",
      feature2En: "The Client went on a trip with some of his friends in a South African safari.",
      feature2Fr: "Le client est parti en voyage avec certains de ses amis dans un safari en Afrique du Sud.",
      staticImageUrlEn: "/api/image-proxy/memopyk-gallery/static_image_1752357028264_en.jpg",
      staticImageUrlFr: "/api/image-proxy/memopyk-gallery/static_image_1752357028264_fr.jpg"
    }
  ];

  const galleryItems = staticGalleryData;
  const isLoading = false;

  const handleVideoPlay = (videoUrl: string) => {
    logDebug(`🎬 MODAL: Opening video ${videoUrl}`);
    setPlayingVideo(videoUrl);
    setShowControls({ [videoUrl]: false });
  };

  const handleVideoClick = (videoUrl: string) => {
    logDebug(`🎬 MODAL: Video clicked - toggling controls for ${videoUrl}`);
    setShowControls(prev => ({
      ...prev,
      [videoUrl]: !prev[videoUrl]
    }));
    
    // Hide controls after 3 seconds
    setTimeout(() => {
      setShowControls(prev => ({
        ...prev,
        [videoUrl]: false
      }));
    }, 3000);
  };

  const handleModalClose = () => {
    logDebug(`🎬 MODAL: Closing video modal`);
    setPlayingVideo(null);
    setShowControls({});
  };

  const getVideoUrl = (item: GalleryItem) => {
    return legacyLanguage === 'fr' ? item.videoUrlFr : item.videoUrlEn;
  };

  const visibleItems = galleryItems
    .filter((item: GalleryItem) => item.isActive)
    .sort((a: GalleryItem, b: GalleryItem) => a.orderIndex - b.orderIndex);

  logDebug(`Rendering ${visibleItems.length} gallery items`);

  // Handle global click to close modal - delay setup to avoid immediate closure
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Don't close if clicking video controls, video, or play buttons
      if (target.closest('.video-controls') || 
          target.closest('video') || 
          target.closest('button')) {
        return;
      }
      
      // Close modal if clicking outside
      if (playingVideo && !target.closest('.modal-video-container')) {
        handleModalClose();
      }
    };

    if (playingVideo) {
      // Add small delay to prevent immediate closure
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleGlobalClick);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleGlobalClick);
      };
    }
  }, [playingVideo]);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {legacyLanguage === 'fr' ? 'Notre Galerie - FINAL 2025 VERSION ✨' : 'Our Gallery - FINAL 2025 VERSION ✨'}
          </h2>
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {legacyLanguage === 'fr' ? 'Notre Galerie - FINAL 2025 VERSION ✨' : 'Our Gallery - FINAL 2025 VERSION ✨'}
        </h2>
        
        {/* Video Modal Overlay */}
        {playingVideo && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="modal-video-container relative max-w-4xl w-full">
              <video
                src={`/api/video-proxy/${playingVideo}`}
                className="w-full h-auto max-h-[80vh] object-contain"
                controls={showControls[playingVideo]}
                autoPlay
                onClick={() => handleVideoClick(playingVideo)}
                onLoadedMetadata={(e) => {
                  const video = e.target as HTMLVideoElement;
                  const aspectRatio = video.videoWidth / video.videoHeight;
                  logDebug(`🎬 MODAL: Video loaded - ${video.videoWidth}x${video.videoHeight} (${aspectRatio.toFixed(2)})`);
                  
                  // Adjust container size based on aspect ratio
                  const container = video.parentElement;
                  if (container && aspectRatio < 1) {
                    // Portrait video - limit width
                    container.style.maxWidth = '400px';
                  } else if (container) {
                    // Landscape video - limit width  
                    container.style.maxWidth = '800px';
                  }
                }}
              />
              
              {/* Close button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-white hover:text-orange-400 text-2xl font-bold z-10"
              >
                ✕
              </button>
              
              {/* Custom controls overlay */}
              {showControls[playingVideo] && (
                <div className="video-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  <button 
                    className="text-white hover:text-orange-400 px-2"
                    onClick={() => {
                      const video = document.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        video.currentTime = 0;
                        video.play();
                      }
                    }}
                  >
                    ⏮
                  </button>
                  <button 
                    className="text-white hover:text-orange-400 px-2"
                    onClick={() => {
                      const video = document.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        if (video.paused) {
                          video.play();
                        } else {
                          video.pause();
                        }
                      }
                    }}
                  >
                    ⏯
                  </button>
                  <button 
                    className="text-white hover:text-orange-400 px-2"
                    onClick={() => {
                      const video = document.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        video.muted = !video.muted;
                      }
                    }}
                  >
                    🔊
                  </button>
                  <button 
                    className="text-white hover:text-orange-400 px-2"
                    onClick={handleModalClose}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item: GalleryItem) => {
            const videoUrl = getVideoUrl(item);
            const imageUrl = legacyLanguage === 'fr' ? (item.staticImageUrlFr || item.imageUrlFr) : (item.staticImageUrlEn || item.imageUrlEn);
            const title = legacyLanguage === 'fr' ? item.titleFr : item.titleEn;
            const description = legacyLanguage === 'fr' ? item.descriptionFr : item.descriptionEn;
            const feature1 = legacyLanguage === 'fr' ? item.feature1Fr : item.feature1En;
            const feature2 = legacyLanguage === 'fr' ? item.feature2Fr : item.feature2En;
            const price = legacyLanguage === 'fr' ? item.priceFr : item.priceEn;

            return (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image/Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  
                  {/* Play Button - only show if video exists */}
                  {videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(videoUrl);
                        }}
                        className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-90 hover:opacity-100 animate-pulse"
                        style={{
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      >
                        <Play size={32} fill="white" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      {feature1 || "Feature 1"}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      {feature2 || "Feature 2"}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right">
                    <span className="text-2xl font-bold text-orange-600">{price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;