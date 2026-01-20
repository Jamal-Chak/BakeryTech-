import { Metadata } from "next";

export function constructMetadata({
    title = "BakeTech Solutions | Bakery Equipment Maintenance & Supply",
    description = "Professional bakery equipment maintenance, emergency repairs, and supply services in South Africa. We keep your bakery running.",
    image = "/og-image.jpg",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@baketechsolutions",
        },
        icons: {
            icon: "/favicon.ico",
        },
        metadataBase: new URL("https://baketechsolutions.co.za"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
