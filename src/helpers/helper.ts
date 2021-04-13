import {postMethod} from './interface';

const request = (function() {
   let server: string = 'http://localhost:1996';

   const Post = async function(url: string, data: object | string): Promise<Response> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      // headers.append('Access-Control-Allow-Headers', '*');

      const x = fetch(`${server}/${url}`, {
         headers: headers,
         keepalive: true,
         method: 'post',
         body: JSON.stringify(data),
      });

      // let XHTTP = new XMLHttpRequest();
      // XHTTP.open('post', `${server}/${url}`, true);
      // XHTTP.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      // XHTTP.onreadystatechange = function() {
      //    console.log(this);
      //    if (this.readyState === 4 && this.status === 200) {
      //       func(XHTTP);
      //    }
      // };
      // XHTTP.send(JSON.stringify(data));

      return await x;
   };

   const Get = async function <T>(url: string, token?: string): Promise<T> {
      const headers = new Headers();
      headers.append("Token", token || "");

      const response = await fetch(`${server}/${url}`, {
         headers: headers
      });

      const body = await response.json();

      if (response.status !== 200) alert(body.message);
      return body;
   };

   return {
      post: Post,
      Get: Get,
   };
})();

export default request;