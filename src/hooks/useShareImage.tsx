import Share from 'react-native-share';

const useShareImage = () => {
  async function shareImage(uri: string) {
    try {
      await Share.open({url: uri});
    } catch (error) {
      if (error === 'User did not share') {
        return;
      }
      console.error('Not able to share image:', error);
    }
  }

  return {shareImage};
};

export default useShareImage;
