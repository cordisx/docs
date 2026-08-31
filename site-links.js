const localHosts = new Set(['127.0.0.1', 'localhost'])
const isStandaloneDocsPreview = localHosts.has(window.location.hostname) && window.location.port === '4175'

if (isStandaloneDocsPreview) {
  const homepageOrigin = `${window.location.protocol}//${window.location.hostname}:4174`
  const localRoutes = new Map([
    ['/#product', `${homepageOrigin}/#product`],
    ['/marketplace/', `${homepageOrigin}/marketplace/`],
    ['/docs/', '/'],
  ])

  document.querySelectorAll('a[href]').forEach(link => {
    const route = localRoutes.get(link.getAttribute('href'))
    if (route) link.setAttribute('href', route)
  })
}
