export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${
        { fullSize } ? "original" : "w500"
      }${imagePath}`
    : "https://as2.ftcdn.net/v2/jpg/04/82/37/53/1000_F_482375378_9q1OVUTCIKY029UGNhW0vbOG6bNuK3SX.jpg";
};
