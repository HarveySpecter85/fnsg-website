"use client";

import React from "react";

/**
 * Speakable component to wrap text for Schema.org Speakable specification.
 * In a real implementation, this would likely interact with a context to build JSON-LD.
 * For now, it marks the content with an ID and data attribute for potential scrapers.
 */
export const Speakable = ({ id, children }: { id: string; children: React.ReactNode }) => {
    return (
        <div id={`speakable-${id}`} data-speakable-id={id} className="speakable-content">
            {children}
        </div>
    );
};

export default Speakable;
