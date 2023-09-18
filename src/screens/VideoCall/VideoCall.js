import AgoraUIKit from 'agora-rn-uikit';

const VideoCall = () => {
    const connectionData = {
        appId: 'b907762bc06a4b5695a7e12f1e6f6cbd',
        channel: 'test',
        token: '007eJxTYHjTuK22cdaWfMMVJ8TFjuw0m2ps3qfdEZST5xzj/ahUTVWBIcnSwNzczCgp2cAs0STJ1MzSNNE81dAozTDVLM0sOSlloS5rakMgI8OuE8EsjAwQCOKzMJSkFpcwMAAA8oweCA==', // enter your channel token as a string 
       };
  return(
    <AgoraUIKit connectionData={connectionData} />
   )
}

export default VideoCall;