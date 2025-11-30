const React = require('react')
const { ThemeProvider } = require('./src/context/theme-context')

exports.wrapRootElement = ({ element }) => {
    return React.createElement(ThemeProvider, null, element)
}

exports.onRenderBody = ({ setPreBodyComponents }) => {
    const script = `
        (function() {
            try {
                var theme = localStorage.getItem('theme') || 'dark';
                var background = theme === 'dark' ? '#212222' : '#f5f5f5';
                var textColor = theme === 'dark' ? '#ffffff' : '#212222';
                document.documentElement.style.backgroundColor = background;
                document.body.style.backgroundColor = background;
                document.body.style.color = textColor;
            } catch (e) {}
        })();
    `
    setPreBodyComponents([
        React.createElement('script', {
            key: 'theme-script',
            dangerouslySetInnerHTML: { __html: script },
        }),
    ])
}
