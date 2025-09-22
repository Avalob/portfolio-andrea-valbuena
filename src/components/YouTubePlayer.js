import React from "react";

export default function YouTubePlayer({ videoUrl, title }) {
  // Extrae el videoId de la url de YouTube
  let videoId = "";
  try {
    const url = new URL(videoUrl.replace('youtu.be/', 'youtube.com/watch?v='));
    if (url.searchParams.has("v")) {
      videoId = url.searchParams.get("v");
    } else {
      const match = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (match) videoId = match[1];
    }
  } catch {
    if (videoUrl.includes("embed/")) {
      videoId = videoUrl.split("embed/")[1].split(/[?&]/)[0];
    }
  }
  if (!videoId) return null;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
      title={title}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen={false}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "8px",
        overflow: "hidden",
        background: "#000",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    />
  );
}
            branding: 0
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
            },
          },
        });
        playerRef.current = player;
      }
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
      if (!document.querySelector("script[src='https://www.youtube.com/iframe_api']")) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    return () => {
      destroyed = true;
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      if (containerRef.current && containerRef.current.firstChild) {
        try {
          containerRef.current.innerHTML = "";
        } catch (e) {}
      }
    };
  }, [videoUrl]);

  // Estilo igual para todos los vídeos de YouTube, ajustado a la caja (como Planetario)
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "16/9",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "8px",
        overflow: "hidden",
        pointerEvents: "none",
        background: "#000",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    />
  );
}
