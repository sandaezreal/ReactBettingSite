"use client";
import "@/app/globals.css";


function Twitch() {
  return (
    <>
    <iframe
    src="https://clips.twitch.tv/embed?clip=<slug>&parent=streamernews.example.com"
    height="350"
    width="100%"
    allowFullScreen>
</iframe>
    </>
  );
}

export default Twitch;
