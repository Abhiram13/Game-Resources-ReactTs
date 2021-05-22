import {postMethod} from './interface';

const request = (function() {
   let server: string = 'http://localhost:1996';

   const Post = async function(url: string, data: object | string): Promise<Response> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');

      const x = fetch(`${server}/${url}`, {
         headers: headers,
         keepalive: true,
         method: 'post',
         body: JSON.stringify(data),
      });

      return await x;
   };

   const Get = async function <T>(url: string): Promise<T> {
      const response = await fetch(`${server}/${url}`);
      const body = await response.json();
      return body;
   };

   return {
      post: Post,
      Get: Get,
   };
})();

const SERVER: string = 'http://localhost:1996';

// class Request {
//    static async Get<T>(url: string): Promise<T> {
//       let x = new Headers();
//       x.append("Cookie", document.cookie);
//       const response = await fetch(`${SERVER}/${url}`, {
//          method: "GET",
//          headers: x,         
//       });
//       const body = await response.json();
//       return body;
//    }
// }

// async function Req<T>(url: string): Promise<T> {
//    let server: string = 'http://localhost:1996';
//    const response = await fetch(`${server}/${url}`);
//    return await response.json();
// }

function headers(): Headers {
   const headers = new Headers();
   headers.append('Content-Type', 'application/json; charset=utf-8');

   return headers;
}

function PostObject<T>(credentials: T) {
   return {
      method: "POST",
      headers: headers(),
      keepalive: true,
      body: JSON.stringify(credentials),
   }
}

export default request;
export {PostObject};