import React from "react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p className="mb-2">&copy; 2024 MyProject. All rights reserved.</p>

            <div className="d-flex justify-content-center gap-3">
                <a
                    href="https://x.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                >
                    X
                </a>
                <a
                    href="https://www.tiktok.com/@yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                >
                    TikTok
                </a>
                <a
                    href="https://www.snapchat.com/add/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                >
                    Snapchat
                </a>
                <a
                    href="https://www.instagram.com/yourProfile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                >
                    Instagram
                </a>
            </div>
        </footer>
    );
}