import {postMethod} from './interface';

let request = (function() {
     let server: string = 'http://localhost:5000';

     return {
          post: function(url: string, data: object | string, func: postMethod): void {
               let XHTTP = new XMLHttpRequest();
               XHTTP.open('post', `${server}/${url}`, true);
               XHTTP.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
               XHTTP.onreadystatechange = function() {
                    console.log(this);
                    if(this.readyState === 4 && this.status === 200) {
                         func(XHTTP);
                    }
               };
               XHTTP.send(JSON.stringify(data));
          },

          get: async function(url: string): Promise<any> {
               const response = await fetch(`${server}/${url}`);
               const body = await response.json();

               if(response.status !== 200) alert(body.message);
               return body;
          }
     };
})();

export default request;