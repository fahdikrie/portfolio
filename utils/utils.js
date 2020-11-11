export const intToStars = (rating) => {
  switch (Number(rating)) {
    case 5:
      return "★★★★★"
    case 4:
      return "★★★★"
    case 3:
      return "★★★"
    case 2:
      return "★★"
    case 1:
      return "★"
    default:
      return "★★★★★"
  }
}

export const getUncompressedURL = (url) => {
  let imageUrl = url.split(".")
  imageUrl.splice(url.split(".").length - 2, 1)

  return imageUrl.join(".")
}