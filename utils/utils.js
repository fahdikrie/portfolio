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

export const convertDateFormat = (date) => {
  const month = date.split("/")[1]
  const day = date.split("/")[2]

  switch (Number(month)) {
    case 1:
      return "Jan " + day
    case 2:
      return "Feb " + day
    case 3:
      return "Mar " + day
    case 4:
      return "Apr " + day
    case 5:
      return "May " + day
    case 6:
      return "Jun " + day
    case 7:
      return "Jul " + day
    case 8:
      return "Aug " + day
    case 9:
      return "Sep " + day
    case 10:
      return "Oct " + day
    case 11:
      return "Nov " + day
    case 12:
      return "Dec " + day
    default:
      return "Jan " + day
  }
}