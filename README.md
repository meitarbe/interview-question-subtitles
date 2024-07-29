# Frontend interview question

## Clone and Run

First, clone the repo. This is a simple create-react-app application, install and run it.

## New feature

As you can see, the project has pre-implemented code, a button which let you choose a video from your file system. There is also a video in the repo named *“Deploy_React_App_in_2_min_for_free.mp4”*  located in *“./src/files”.* Use it for testing. 

The mission - Implement a subtitles generation feature. The flow will be:

1. A user choose a video from the file system (already implemented).
2. After choosing a video, the video will be processed and subtitles will be generated for it (also implemented).
3. When the subtitiles are ready, the video will be shown, and when we’ll play it, the subtitles will be visible at the right timing like in this example:

<img src="https://nostalgic-blinker-247.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff717d4d8-772b-45bf-9486-6afc736669d3%2F06e81ca9-ee7d-4bac-8ef7-423cecb1960a%2FUntitled.png?table=block&id=054a77ed-5256-4e74-a1f7-bc0fe4b50a77&spaceId=f717d4d8-772b-45bf-9486-6afc736669d3&width=2000&userId=&cache=v2" alt="alt_text" height="400">

## Pre-implemented code

1. You should use our extention ability to generate subtitles, the extention can accept event messages with the pre-made function *dispatchCustomEvent* with the event name *GENERATE_SUBTITLES_TASK* and the *videoSrc* in the data.

Example usage:

```tsx
dispatchCustomEvent(GENERATE_SUBTITLES_TASK, {
    detail: {
      videoSrc
    }
});
```

2.After some unknown time, the extention will send back a message on custom event called *CAPTIONS_GENERATION_COMPLETED*. The subtitles will be available in the *detail.reponse* of that event message.