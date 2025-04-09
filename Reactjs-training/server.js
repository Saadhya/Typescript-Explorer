// run as - node server.js
const http = require("http");
Promise.resolve().then(() => console.log(1));
const numbers = [1, 2, 3, 4, 5];
const genListHTML = () =>
  `<ul>${numbers.map((num) => `<li>${num}</li>`).join("")}</ul>`;
const genButtonHTML = () => `<button id="addItemBtn">add item</button>`;

const server = http.createServer((req, res) => {
  const initialList = genListHTML();
  const btnHtml = genButtonHTML();
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
    <html lang="en">
     <body>
            <h1>Single Page App</h1>
            <p>Single Page App using React but not react project.</p>
            <div id="root">${initialList} ${btnHtml}</div>            
        </body>
        <script>
            const numbers= ${JSON.stringify(numbers)}
            const rootElement=document.getElementById('root');
            const addButton=document.getElementById('addItemBtn');
            console.log(addButton);
            const incValue= 3;
            function addValue() {
                let newvalu = Math.max(...numbers) + incValue;
                numbers.push(newvalu);
                console.log(numbers);
                rootElement.querySelector('ul').insertAdjacentHTML("beforeend", \`<li>\${newvalu}</li>\`);
            }
            addButton && addButton.addEventListener("click", addValue);
        </script>
       
    </html>`);
  // if(req.url==='/'){
  //     res.end('Welcome to our home page')
  // }
});
server.listen(5000, "localhost", () => {
  console.log("Server is running on http://localhost:5000");
});
