function postRequest(method: string, url: string, data: object | string, func: any) {
    let XHTTP = new XMLHttpRequest();
    XHTTP.open(method, `http://localhost:5000/${url}`, true);
    XHTTP.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHTTP.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            func(XHTTP);
        }
    }
    XHTTP.send(JSON.stringify(data));
}

export { postRequest };