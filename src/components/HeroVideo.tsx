"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!video) return;

                const shouldReduceMotion = mediaQuery.matches;

                if (!entry.isIntersecting || shouldReduceMotion) {
                    video.pause();
                    return;
                }

                // Auto-play with audio when visible
                if (video.paused) {
                    video.play().catch(() => {
                        // Respect browser autoplay restrictions.
                    });
                }
            },
            { threshold: 0.35 },
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = muted;
    }, [muted]);

    const handleSoundToggle = () => {
        const video = videoRef.current;
        if (!video) return;

        const nextMuted = !muted;
        setMuted(nextMuted);
        video.muted = nextMuted;

        if (nextMuted) {
            video.pause();
            return;
        }

        video.play().catch(() => {
            // Respect browser autoplay restrictions.
        });
    };

    return (
        <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-200 shadow-[0_35px_90px_-40px_rgba(24,24,27,0.8)]">
            <video
                ref={videoRef}
                className="block aspect-[4/5] w-full object-cover"
                src="/hero/intro.mp4"
                muted={muted}
                playsInline
                autoPlay
                preload="auto"
            />

            <button
                type="button"
                aria-label={muted ? "Enable sound" : "Mute video"}
                title={muted ? "Enable sound" : "Mute video"}
                onClick={handleSoundToggle}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/35 text-base text-white backdrop-blur-sm transition hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
            >
                <span aria-hidden="true">{muted ? "🔇" : "🔊"}</span>
            </button>
        </div>
    );
}

