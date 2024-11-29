import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'
// unocss animation https://animate.zyob.top/

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': '-0.15em',
      },
    }),
    presetUno(),
    presetAttributify(),
  ],
  transformers: [transformerDirectives()],
  preflights: [],
  theme: { spacing: {} },
  safelist: [],
  content: {},
  rules: [
    ['flex-center', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
  ],
})
