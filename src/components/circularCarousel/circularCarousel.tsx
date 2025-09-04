import React, { useState, useEffect, useRef, memo } from "react";
import img1 from "../../assets/carousel/1.jpg";
import img2 from "../../assets/carousel/2.jpg";
import img3 from "../../assets/carousel/3.jpg";
import img4 from "../../assets/carousel/4.webp";

const avatars = [
  { img: img1, text: "Problem Solver" },
  { img: img2, text: "Flutter Developer" },
  { img: img3, text: "Web Developer" },
  { img: img4, text: "Data Engineer" }
];

const CarouselItem = memo(({ item, isActive, style, onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd, size }: {
  item: { img: string; text: string };
  isActive: boolean;
  style: React.CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
  size: number;
}) => {
  return (
    <div
      className={`carousel-item${isActive ? " active" : ""}`}
      style={{
        ...style,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "transparent",
        // boxShadow: "0 2px 10px 0 #ccc",
        cursor: "pointer",
        // border: isActive ? "3px solid #E7984B" : "3px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3,
        transition: "border 0.18s, box-shadow 0.2s, transform 0.22s"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={item.img}
        alt={item.text}
        loading="lazy"
        style={{
          width: size * 0.8,
          height: size * 0.8,
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
    </div>
  );
});

export function CircularCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex(i => (i + 1) % avatars.length);
      }, 3000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const current = activeIndex !== null ? avatars[activeIndex] : avatars[currentIndex];

  const maxSize = isMobile ? 320 : Math.min(window.innerWidth * 0.7, 600);
  const centerSize = isMobile ? 160 : maxSize * 0.45;
  const radius = isMobile ? 0 : maxSize / 2.25;
  const imgSize = isMobile ? 60 : maxSize * 0.15;
  const center = maxSize / 2;

  return (
    <div
      className="carousel-flex-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: isMobile ? undefined : maxSize,
        justifyContent: "center"
      }}
    >
      <div
        className="circular-carousel-root"
        style={{ width: maxSize, height: maxSize, top:"-15vh", position: "relative", minHeight: isMobile ? undefined : maxSize, maxWidth: "98vw" }}
      >
        <div
          className="central-circle"
          style={{
            width: centerSize,
            position: isMobile ? "static" : "absolute",
            left: isMobile ? undefined : `calc(50% - ${centerSize / 2}px)`,
            top: isMobile ? undefined : `calc(50% - ${centerSize / 2}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // boxShadow: "0 4px 28px 0 rgba(0,0,0,0.18)",
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            margin: isMobile ? "0 auto 22px auto" : undefined,
            padding: isMobile ? "8px" : "16px"
          }}
        >
          <img
            src={current.img}
            alt={current.text}
            className="central-img"
            style={{
              width: centerSize,
              height: centerSize,
              top:"-15vh",
              borderRadius: "50%",
              objectFit: "cover",
              background: "#fff",
            //   border: "5px solid #fff",
              boxShadow: "0 1px 8px 0 #bbb"
            }}
            loading="lazy"
          />
          <div
            className="central-text"
            style={{
              color: "#fff",
              fontSize: isMobile ? "1.2rem" : "3rem",
              fontWeight: 700,
              marginTop: 12,
              userSelect: "none",
              whiteSpace: "nowrap",
              textShadow: "1px 5px 8px rgba(228, 244, 245, 0.5)" 
            }}
          >
            {current.text}
          </div>
        </div>

        <div
          className={`items-container${isMobile ? " column" : ""}`}
          style={{
            width: maxSize,
            height: isMobile ? undefined : maxSize,
            animation: !isMobile ? "spin 26s linear infinite" : undefined,
            marginTop: isMobile ? 10 : 0,
            display: isMobile ? "flex" : "block",
            flexDirection: isMobile ? "column" : undefined,
            alignItems: isMobile ? "center" : undefined,
            justifyContent: isMobile ? "flex-start" : undefined
          }}
        >
          {avatars.map((item, idx) => {
            let style: React.CSSProperties = {};
            if (!isMobile) {
              const angle = (2 * Math.PI * idx) / avatars.length - Math.PI / 2;
              style.position = "absolute";
              style.left = center + radius * Math.cos(angle) - imgSize / 2;
              style.top = center + radius * Math.sin(angle) - imgSize / 2;
            } else {
              style.position = "static";
              style.marginBottom = 17;
              style.width = imgSize;
              style.height = imgSize;
              style.display = "flex";
              style.alignItems = "center";
              style.justifyContent = "center";
            }

            return (
              <CarouselItem
                key={idx}
                item={item}
                isActive={activeIndex === idx}
                style={style}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onTouchStart={() => setActiveIndex(idx)}
                onTouchEnd={() => setActiveIndex(null)}
                size={imgSize}
              />
            );
          })}
        </div>

        <style>{`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
          .carousel-item.active,
          .carousel-item:hover {
            border: 3px solid #E7984B !important;
            box-shadow: 0 4px 18px 0 #E7984B55 !important;
            transform: scale(1.19);
          }
          .items-container.column .carousel-item {
            margin-bottom: 16px;
            position: static !important;
            width: 54px !important;
            height: 54px !important;
          }
          .items-container.column .carousel-item img {
            width: 38px !important;
            height: 38px !important;
          }
          @media (max-width: 600px) {
            .carousel-flex-wrapper {
              min-height: unset;
            }
            .circular-carousel-root {
              min-height: unset;
            }
            .central-circle {
              position: static !important;
              margin: 0 auto 22px auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
