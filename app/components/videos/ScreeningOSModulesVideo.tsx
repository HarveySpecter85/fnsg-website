"use client";

export default function ScreeningOSModulesVideo() {
    return (
        <div className="w-full mt-12 mb-16">
            <video
                className="w-full rounded-xl shadow-lg border border-neutral-800"
                controls
                playsInline
                preload="metadata"
            >
                <source src="https://res.cloudinary.com/dr7fov4v4/video/upload/v1765242433/The_Price_of_Proof_nzu9tf.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    );
}
