const localeToggle = document.querySelector('#locale-toggle')
const themeToggle = document.querySelector('#theme-toggle')
const themeColor = document.querySelector('meta[name="theme-color"]')
const STORAGE_LOCALE = 'cordisx:locale'
const STORAGE_THEME = 'cordisx:theme'
const systemTheme = matchMedia('(prefers-color-scheme: light)')

const translations = {
  en: {
    product: 'Product', docs: 'Docs', marketplace: 'Marketplace', protocol: 'Protocol', homeLabel: 'CordisX home',
    hostKicker: 'HOST / CORDISX', hostTitle: 'CordisX host guide', hostDescription: 'Architecture, extension surfaces, and the local Codex Desktop host.',
    protocolKicker: 'CONTRACT / PROTOCOL', protocolTitle: 'Extension protocol', protocolDescription: 'Versioned contracts, schemas, compatibility, and implementation guidance.',
    catalogKicker: 'DISCOVERY / MARKETPLACE', catalogTitle: 'Community catalog', catalogDescription: 'Browse public plugin metadata from the marketplace feed.',
    registryKicker: 'AGGREGATION / SOURCES', registryTitle: 'Documentation registry', registryDescription: 'See which source repositories are allowed into this documentation site.',
    footerIntro: 'An extensible layer for the AI coding workspace you already trust.', footerTitle: 'Unofficial, local, and opt-in.',
    footerDescription: 'CordisX brings plugins into Codex Desktop without replacing your tools, projects, conversations, or agent loop.',
    footerSafety: 'Plugins currently run as trusted renderer code. Sandboxing, signed packages, and enforced permissions are not yet available—review source before enabling an extension.',
    copyright: '© 2026 CordisX. Open source.', preferencesLabel: 'Display preferences', languageName: 'EN', languageAction: 'Switch language to Chinese',
    system: 'System', dark: 'Dark', light: 'Light', themeAction: 'Switch color theme',
  },
  'zh-CN': {
    product: '产品', docs: '文档', marketplace: '插件市场', protocol: '协议', homeLabel: '返回 CordisX 首页',
    hostKicker: 'HOST / CORDISX', hostTitle: 'CordisX Host 指南', hostDescription: '了解架构、扩展界面以及本地 Codex Desktop Host。',
    protocolKicker: '契约 / 协议', protocolTitle: '扩展协议', protocolDescription: '查看版本化契约、Schema、兼容性和实现指南。',
    catalogKicker: '发现 / 插件市场', catalogTitle: '社区目录', catalogDescription: '浏览插件市场公开数据源中的插件元数据。',
    registryKicker: '聚合 / 来源', registryTitle: '文档来源登记', registryDescription: '查看允许进入本站的文档来源仓库。',
    footerIntro: '为你已经信任的 AI 编程工作区增加可扩展能力。', footerTitle: '非官方、本地运行、由你启用。',
    footerDescription: 'CordisX 将插件带入 Codex Desktop，同时保留你现有的工具、项目、对话和智能体工作流。',
    footerSafety: '插件目前以受信任的渲染器代码运行，暂不提供沙箱、签名包或强制权限控制；启用扩展前请先审查源码。',
    copyright: '© 2026 CordisX。开源项目。', preferencesLabel: '显示偏好', languageName: '中文', languageAction: '切换语言为英文',
    system: '跟随系统', dark: '深色', light: '浅色', themeAction: '切换颜色主题',
  },
}

let locale = storedValue(STORAGE_LOCALE) || ((navigator.language || '').startsWith('zh') ? 'zh-CN' : 'en')
const storedTheme = storedValue(STORAGE_THEME)
let followsSystemTheme = storedTheme !== 'light' && storedTheme !== 'dark'
let theme = followsSystemTheme ? (systemTheme.matches ? 'light' : 'dark') : storedTheme

function storedValue(key) {
  try { return localStorage.getItem(key) } catch { return null }
}

function storeValue(key, value) {
  try { localStorage.setItem(key, value) } catch {}
}

function clearValue(key) {
  try { localStorage.removeItem(key) } catch {}
}

function copy(key) {
  return translations[locale]?.[key] ?? translations.en[key] ?? key
}

function applyLocale() {
  document.documentElement.lang = locale
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = copy(element.dataset.i18n) })
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => { element.setAttribute('aria-label', copy(element.dataset.i18nAriaLabel)) })
  localeToggle.querySelector('[data-locale-label]').textContent = copy('languageName')
  localeToggle.setAttribute('aria-label', copy('languageAction'))
  localeToggle.title = copy('languageAction')
}

function applyTheme() {
  document.documentElement.dataset.theme = theme
  themeColor.content = theme === 'light' ? '#e7e7e4' : '#1b1c20'
  themeToggle.querySelector('[data-theme-label]').textContent = followsSystemTheme ? copy('system') : copy(theme)
  themeToggle.setAttribute('aria-label', copy('themeAction'))
  themeToggle.title = copy('themeAction')
}

localeToggle.addEventListener('click', () => {
  locale = locale === 'en' ? 'zh-CN' : 'en'
  storeValue(STORAGE_LOCALE, locale)
  window.location.reload()
})

themeToggle.addEventListener('click', () => {
  if (followsSystemTheme) {
    followsSystemTheme = false
    theme = 'dark'
    storeValue(STORAGE_THEME, theme)
  } else if (theme === 'dark') {
    theme = 'light'
    storeValue(STORAGE_THEME, theme)
  } else {
    followsSystemTheme = true
    theme = systemTheme.matches ? 'light' : 'dark'
    clearValue(STORAGE_THEME)
  }
  applyTheme()
})

systemTheme.addEventListener('change', event => {
  if (!followsSystemTheme) return
  theme = event.matches ? 'light' : 'dark'
  applyTheme()
})

applyLocale()
applyTheme()
