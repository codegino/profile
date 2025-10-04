
const grigoraHost = 'https://cdn.grigora.co/projects/10ddb1b4-c8f5-48cd-98f4-e11824bf400b'

export function getImageUrl(imageName: string, prefix = "static"): string {
  return `${grigoraHost}/images/${prefix}/${imageName}`
}
