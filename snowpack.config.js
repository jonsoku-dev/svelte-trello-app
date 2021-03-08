const production = process.env.NODE_ENV === 'production'

module.exports = {
    // 연결해주는 옵션
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        ['@snowpack/plugin-svelte', {
            preprocess: require('svelte-preprocess')({
                scss: {
                    prependData : '@import "./src/scss/main.scss";'
                },
                postcss: {
                    plugins: [
                        require('autoprefixer')()
                    ]
                },
                // @snowpack/plugin-babel 은 svelte를 지원하지 않으므로.. 여기에도 추가한다.
                babel: {
                    plugins: production ? ['transform-remove-console'] : []
                }
            })
        }],
        ['@snowpack/plugin-babel', {
            transformOptions: {
                // babel-plugin-transform-remove-console
                // https://babeljs.io/docs/en/babel-plugin-transform-remove-console
                plugins: production ? ['transform-remove-console'] : []
            }
        }],
        '@snowpack/plugin-dotenv', // process.env 지원
        '@snowpack/plugin-sass', // sass 지원
        '@snowpack/plugin-optimize' // 제품모드일때 난독화
    ],
    alias: {
        '~': './src'
    }
}