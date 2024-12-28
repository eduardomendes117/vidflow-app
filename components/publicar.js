import { google } from 'googleapis';

export async function uploadToYouTube(auth, videoPath, title, description) {
  const youtube = google.youtube({ version: 'v3', auth });

  const response = await youtube.videos.insert({
    part: 'snippet,status',
    requestBody: {
      snippet: { title, description },
      status: { privacyStatus: 'public' },
    },
    media: {
      body: fs.createReadStream(videoPath),
    },
  });

  return response.data;
}
