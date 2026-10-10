import './globals.css';

export const metadata = {
    title: 'Kinetix Studio — Next-Gen Kinetic Digital Experience',
    description: 'Kinetix Studio is an award-winning creative agency specialising in kinetic design, brand strategy, immersive physics-driven interactions, and interactive production.',
    icons: {
        icon: 'https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/68381362603d6402ee03c00e_favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
