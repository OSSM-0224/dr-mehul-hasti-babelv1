import React, { useEffect, useRef, useState } from "react";
import { branchesConfig } from "@/src/config/branches";

export default function DualBranchMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false);

  useEffect(() => {
    // 1. Check if Leaflet is already loaded on window
    if ((window as any).L) {
      setIsLeafletLoaded(true);
      return;
    }

    // 2. Load CSS
    const linkId = "leaflet-cdn-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    // 3. Load Script
    const scriptId = "leaflet-cdn-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.crossOrigin = "";
      script.onload = () => {
        setIsLeafletLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      // If script tag already exists but window.L is not ready yet, wait/poll
      const interval = setInterval(() => {
        if ((window as any).L) {
          setIsLeafletLoaded(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (!isLeafletLoaded || !mapContainerRef.current) return;

    // Prevent re-initialization
    if (mapInstanceRef.current) return;

    const L = (window as any).L;
    if (!L) return;

    // Coordinates of Chembur and Mankhurd
    const chemburCoord = branchesConfig[0].coordinates;
    const mankhurdCoord = branchesConfig[1].coordinates;

    // Calculate center
    const centerLat = (chemburCoord.lat + mankhurdCoord.lat) / 2;
    const centerLng = (chemburCoord.lng + mankhurdCoord.lng) / 2;

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      center: [centerLat, centerLng],
      zoom: 12,
      scrollWheelZoom: false, // avoid intercepting page scroll
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    // Add Tile Layer (CartoDB Dark Matter)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    // Create a beautiful custom gold/blue icon for the pins to match our brand's luxury aesthetic
    const customIcon = L.divIcon({
      className: "custom-leaflet-pin",
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute w-8 h-8 bg-[#894600]/30 rounded-full animate-ping"></div>
          <div class="relative w-6 h-6 bg-[#005B96] border-2 border-[#894600] rounded-full flex items-center justify-center shadow-lg">
            <div class="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });

    // Add markers
    branchesConfig.forEach((branch) => {
      const marker = L.marker([branch.coordinates.lat, branch.coordinates.lng], { icon: customIcon })
        .addTo(map);

      // Custom high-contrast popup content
      const popupContent = `
        <div class="font-inter text-slate-800 p-2 max-w-[240px]">
          <h4 class="font-bold text-sm text-[#005B96] mb-1">${branch.name.replace("Unique Dental Care — ", "")} Branch</h4>
          <p class="text-xs text-slate-600 mb-2 leading-relaxed">${branch.address}</p>
          <a href="${branch.directionsUrl}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-1 text-xs font-bold text-[#894600] hover:text-[#005B96] transition-colors">
            Get Directions &rarr;
          </a>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: false,
        className: "custom-leaflet-popup",
      });

      // Show popup on hover/click
      marker.on("mouseover", function (e: any) {
        this.openPopup();
      });
    });

    // Clean up map instance on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isLeafletLoaded]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-800/80 shadow-inner bg-slate-950 min-h-[300px] md:min-h-[400px]">
      <style>{`
        .custom-leaflet-popup .leaflet-popup-content-wrapper {
          background: white !important;
          color: #1e293b !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
          border: 1px solid #e2e8f0 !important;
          padding: 2px !important;
        }
        .custom-leaflet-popup .leaflet-popup-tip {
          background: white !important;
          border: 1px solid #e2e8f0 !important;
        }
      `}</style>
      {!isLeafletLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 text-slate-500 z-50">
          <div className="w-8 h-8 border-2 border-slate-700 border-t-[#894600] rounded-full animate-spin"></div>
          <span className="text-xs font-mono">Initializing Interactive Map...</span>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full z-10 absolute inset-0" />
    </div>
  );
}
