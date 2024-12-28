import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { accessToken, videoTitle, videoDescription, videoFile } = req.body;

  try {
    const youtube = google.youtube({
      version: "v3",
      auth: accessToken,
    });

    const response = await youtube.videos.insert({
      part: "snippet,status",
      requestBody: {
        snippet: {
          title: videoTitle,
          description: videoDescription,
        },
        status: {
          privacyStatus: "private",
        },
      },
      media: {
        body: videoFile, // Precisa ser um stream ou buffer
      },
    });

    res.status(200).json({ message: "Upload successful!", videoId: response.data.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
