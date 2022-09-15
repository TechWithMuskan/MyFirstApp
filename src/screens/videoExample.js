import React from 'react';
import Video from 'react-native-video';
import {View, StyleSheet} from 'react-native';

const VideoExample = () => {
  const onLoadEnd = () => {
    // console.log('onLoadEnd :', onLoadEnd);
  };

  const onLoadStart = () => {
    // console.log('onLoadStart :', onLoadStart);
  };

  const onProgress = () => {
    // console.log('onProgress :', onProgress);
  };

  const onBuffer = () => {
    console.log('onBuffer :', onBuffer);
  };

  const onError = () => {
    console.log('onError :', onError);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.backgroundVideo}
        controls={true}
        volume={10}
        muted={true}
        onLoad={onLoadEnd}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        onBuffer={onBuffer}
        onError={onError}
        fullscreenOrientation={'landscape'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EFEC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 265,
  },
});

export default VideoExample;
