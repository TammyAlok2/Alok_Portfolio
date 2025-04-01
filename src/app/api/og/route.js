import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = 0; // Disable cache for testing

export async function GET(request) {
    try {
        // Correctly construct the image URL using the request origin
        const baseUrl = new URL(request.url).origin;
        // console.log("baseUrl: ", baseUrl)
        const imageUrl = `${baseUrl}/New_logo.png`;
 
        return new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "1200px",
                        height: "630px",
                        backgroundColor: "white",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Portfolio website image"
                        width={1200}
                        height={630}
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error) {
        console.error('OG Image generation error:', error);
        return new Response("Failed to generate OG image", { status: 500 });
    }
}
