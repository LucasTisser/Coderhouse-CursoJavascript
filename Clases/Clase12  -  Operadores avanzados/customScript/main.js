let activeUser = {};

function init() {
  console.log('ESTAMOS');
  cambiarUsuarioActivo(0);
  programarFuncionProgramarUsuarioActivo();
  mostrarUsuariosConFotosMasVotadas();
}

function cambiarUsuarioActivo(index = -1) {
  if (index === -1) {
    let min = Math.ceil(0);
    let max = Math.floor(users.length);
    index = Math.floor(Math.random() * (max - min) + min);
    // the maximum is exclusive and the minimum is inclusive
  }
  console.log(index);
  activeUser = users[index];

  modificarPantallaParaVerUsuarioActivo();
  modificarStoryLine();
}

function modificarPantallaParaVerUsuarioActivo() {
  const nodosImagen = document.querySelectorAll('.userPicture');

  nodosImagen.forEach((img) => (img.src = activeUser.fotoDePerfil));

  const nodosNickName = document.querySelectorAll('.userNickName');
  nodosNickName.forEach((texto) => (texto.innerHTML = activeUser.nickname));

  const nodosFullName = document.querySelectorAll('.userFullName');
  nodosFullName.forEach(
    (texto) => (texto.innerHTML = activeUser.nombre + ' ' + activeUser.apellido)
  );
}

function modificarStoryLine() {
  const usersNotActive = users.filter((user) => user.id !== activeUser.id);

  const nodo = document.querySelector('.stories__content');

  nodo.innerHTML = '';

  usersNotActive.forEach((user) => {
    const btn = document.createElement('button');
    btn.classList.add('story');
    btn.classList.add('story--has-story');

    btn.innerHTML = `
        <button class="story story--has-story">
                <div class="story__avatar">
                    <div class="story__border">
                        <svg
                            width="64"
                            height="64"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle r="31" cy="32" cx="32" />
                            <defs>
                                <linearGradient
                                    y2="0"
                                    x2="1"
                                    y1="1"
                                    x1="0"
                                    id="--story-gradient"
                                    >
                                        <stop offset="0" stop-color="#f09433" />
                                        <stop offset="0.25" stop-color="#e6683c" />
                                        <stop offset="0.5" stop-color="#dc2743" />
                                        <stop offset="0.75" stop-color="#cc2366" />
                                        <stop offset="1" stop-color="#bc1888" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="story__picture">
                        <img src="${user.fotoDePerfil}" alt="User Picture" />
                    </div>
                </div>
                <span class="story__user">${user.nickname}</span>
        </button>
        `;
    nodo.appendChild(btn);
  });
}

function programarFuncionProgramarUsuarioActivo() {
  const btn = document.getElementById('cambiarUsuario');
  btn.addEventListener('click', () => {
    cambiarUsuarioActivo();
  });
}

function mostrarUsuariosConFotosMasVotadas() {
  const nodoMejoresCinco = document.querySelector('#mejoresCinco');

  /*
        1.Tener un array,con las pictures asociadas a los usuarios.
        2.
    */

  const usuariosConPics = users.map((user) => {
    const fotosDeUsuario = getFullPictures(user.pictures);

    return {
      ...user,
      pictures: fotosDeUsuario,
    };
  });
  /*    `<div class="side-menu__suggestion">
        <a href="#" class="side-menu__suggestion-avatar">
            <img src="assets/default-user.png" alt="User Picture" />
        </a>
        <div class="side-menu__suggestion-info">
            <a href="#">usernick16</a>
            <span>Followed by user1, user2 and 9 others</span>
        </div>
    </div>`
*/
}

function getFullPictures(arraydeids) {
  const resultado = [];

  arraydeids.forEach((id) => {
    const foto = pictures.find((element) => element.id === id);
    resultado.push(foto);
  });
  return resultado;
}
