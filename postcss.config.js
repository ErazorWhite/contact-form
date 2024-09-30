export default (ctx) => ({
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
        'postcss-mixins': {},
        '@csstools/postcss-global-data': {
            files: ['./src/index.css'],
        },
        'postcss-custom-media': {},
        'postcss-nested': {preserveEmpty: true},
        cssnano: ctx.env === 'production' ? {} : false
    }
})
