function appendScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script)
}

export default appendScript;