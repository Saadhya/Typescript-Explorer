import { React } from "react";
window.onload = () => {
  const rootelement = document.getElementById("root");
  // rootelement.innerHTML = "Hello World ";
  // const button = document.createElement('button');
  // button.innerHTML = "Click me for current date ";
  // button.onclick = ()=>{
  //     const date = new Date();
  //     rootelement.innerHTML = date;
  // }
  // rootelement.appendChild(button);

  // second video
  const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // ints.forEach((item)=>{
  //     const li = document.createElement('li');
  //     li.innerHTML = item;
  //     rootelement.appendChild(li);
  // })

  // react way
  const root = ReactDOMClient.createRoot(rootelement);
  const childrenElem = [];
  childrenElem.push(React.createElement("li", { key: ints[0] }, ints[0]));
  childrenElem.push(React.createElement("li", { key: ints[1] }, ints[1]));
  childrenElem.push(React.createElement("li", { key: ints[2] }, ints[2]));
  root.render(childrenElem);
};
