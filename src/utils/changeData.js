 
export  default function formatDate(timeStamp) {
  let date = new Date(timeStamp)
  let isoData = date.toISOString()

  return isoData
}
