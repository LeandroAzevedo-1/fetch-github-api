const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = ` <div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>

                                        <div class="data">
                                            <h1>${
                                            user.name ??
                                            "Não possui nome cadastrado 😥"
                                            }</h1> 
                                            <p>${
                                            user.bio ??
                                            "Não possui bio cadastrada 😥"
                                            }</P>
                                        </div>

                                        <div class="follow">
                                            <div class="follow-container">
                                                <p>👥 Seguidores</p>
                                                <h3>${user.followers ?? "Usuário(a) não possui seguidores 😥"}</h3>
                                            </div>
                                            <div class="follow-container">
                                                <p>👥 Seguindo</p>
                                                <h3 class="following">${ user.following ?? "Usuário(a) não segue ninguém 😥"}</h3>  
                                            </div>
                                        </div>
                                    </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `
                                <li>
                                    <a href="${repo.html_url} target="_blank">${repo.name}
                                        <ul>
                                            <li class="Repository-information">🍴${repo.forks_count}</li>
                                            <li class="Repository-information">⭐${repo.stargazers_count}</li>
                                            <li class="Repository-information">👀${repo.watchers_count}</li>
                                            <li class="Repository-information">💻${repo.language}</li>
                                        </ul>
                                    </a>
                                </li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
                                             <div class='repositories section'>
                                                 <h2>Repositórios</h2>
                                                 <ul>${repositoriesItens}</ul>
                                             </div>`;
    }  
    // 
    let userActivity = "";
    user.activities.forEach((activity) => {
      userActivity += `<div>
                          <a href="#"><strong>${activity.repo.name}:</strong>${activity.type}</a>
                       </div>`;
    });

    if (userActivity.length > 0) {
      this.userProfile.innerHTML += `<div class="activities section">
                                        <hr>
                                        <h2>Atividades</h2>
                                        <ul>${userActivity}</ul>
                                      </div>`;
    }
    
  },
  renderNotFound() {
    this.userProfile.innerHTML = `<h4 class="error">Usuário não encontrado.</h4>`;
  },
};

export { screen };
