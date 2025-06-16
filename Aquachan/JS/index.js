const corpo=document.querySelector('body')
//corpo.style.backgroundColor='#A9a9a9';
corpo.style.alignItems="center";
corpo.style.flexDirection="column"
corpo.style.display="flex";

const contexto = document.createElement('div');
contexto.style.width = '100%';
contexto.style.height = '600px';
contexto.style.textAlign = "center";
contexto.style.fontSize = "70px";
// document.body.appendChild(contexto);
    const img = document.createElement('img');
    img.src = 'media/cero.png';
    img.style.width = '60%';
    img.style.height = '60%';
    img.style.bottom="60px"
contexto.appendChild(img,contexto);

document.body.appendChild(contexto);

const xerox= document.createElement("a")
    xerox.style.backgroundColor= 'D3d3d3';
    xerox.style.width= '50%';
    xerox.style.height= '50px';
    xerox.style.border="10px solid black";
    xerox.style.borderRadius='10px';
    xerox.style.boxShadow='10px 10px 10px rgb(108, 127, 128)';
    xerox.innerText='Tecnologia avançada';
    xerox.style.justifyContent="center";
    xerox.style.textAlign="center";
    xerox.style.alignItems="center";
    xerox.style.fontSize="30px";
    xerox.style.display="flex";
    xerox.setAttribute("href","templates/reclamasaun.html")
    document.body.appendChild(xerox);

const br=document.createElement("br")
document.body.appendChild(br);

const douglas= document.createElement("a")
    douglas.style.backgroundColor= 'D3d3d3';
    douglas.style.width= '50%';
    douglas.style.height= '50px';
    douglas.style.borderRadius='10px';
    douglas.style.border="10px solid black";
    douglas.style.boxShadow='10px 10px 10px rgb(117, 135, 136)';
    douglas.innerText='Tecnologia Medieval';
    douglas.style.textAlign="center";
    douglas.style.justifyContent="center";
    douglas.style.fontSize="30px";
    douglas.style.display="flex";
    douglas.setAttribute("href","templates/Tecnologia_Medieval.html")
document.body.appendChild(douglas);
