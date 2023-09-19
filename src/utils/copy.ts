export const copyToClipboard = (text: string) => {
  const input = document.createElement('input')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
