const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Replace } = require('lucide-react');

const svgString = ReactDOMServer.renderToString(React.createElement(Replace));
console.log(svgString);
