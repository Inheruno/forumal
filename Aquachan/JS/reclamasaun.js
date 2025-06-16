const comeco=document.querySelector('body')
    comeco.style.backgroundColor='#A9a9a9';
    comeco.style.alignItems="center";
    comeco.style.flexDirection="column"
    comeco.style.display="flex";

const contexto = document.createElement('div');
    contexto.style.width = '100%';
    contexto.style.height = '600px';
    contexto.style.textAlign = "center";
    contexto.style.fontSize = "70px";
    contexto.style.color='red';
// document.body.appendChild(contexto);
    const img = document.createElement('img');
    img.src = '/media/cero.png';
    img.style.width = '30%';
    img.style.height = '30%';
    img.style.bottom="60px"
document.body.appendChild(img,contexto);

const sarajevo =document.createElement("h1");
    sarajevo.style.textAlign="center";
    sarajevo.innerText="/R/-Tecnologia";
    sarajevo.style.color="red";
document.body.appendChild(sarajevo);
const kiss =document.createElement('div')
    kiss.style.color='black';
    kiss.innerText='Poste alguma coisa';
    kiss.style.textAlign='center';
    kiss.style.fontSize='30px';
    kiss.setAttribute("onclick","post()");
document.body.appendChild(kiss);

function post(){
    const label_titulo=document.createElement("label")
        label_titulo.setAttribute('for','titulo')
        label_titulo.innerHTML='Titulo'
        document.body.appendChild(label_titulo);
    const titulo=document.createElement("input");
        titulo.setAttribute("type","text");
        titulo.setAttribute("id","titulo");
        //titulo.style.color='red'
        document.body.appendChild(titulo)

    const label_comentario=document.createElement("label")
        label_comentario.setAttribute('for','titulo')
        label_comentario.innerHTML='Corpo'
        document.body.appendChild(label_comentario);
    const comentario=document.createElement("textarea");
        comentario.setAttribute("type","text");
        comentario.setAttribute("id","texto");
        //comentario.style.color='red'
        document.body.appendChild(comentario)

    const btn_post =document.createElement('div')
        btn_post.style.color='black';
        btn_post.innerText='Post';
        btn_post.style.textAlign='center';
        btn_post.style.fontSize='30px';
        btn_post.setAttribute("onclick","list_post()");
    document.body.appendChild(btn_post);

}
function list_post(){
    const titulo_input=document.getElementById('titulo')
    titulo_input.setAttribute("disabled","disabled")
    const texto_textarea=document.getElementById("texto")
    texto_textarea.setAttribute("disabled","disabled")

    const lista=document.createElement('ul')
        lista.appendChild(titulo_input)
        lista.appendChild(texto_textarea)
    document.body.appendChild(lista)
}