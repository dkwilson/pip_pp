const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('whoops, error here: ', error);
  }
}

button.addEventListener('click', async () => {
  // diable button
  button.disabled = true;

  // start picutre in picture
  await videoElement.requestPictureInPicture();

  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();
