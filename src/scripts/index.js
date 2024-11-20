import { getUser } from "./service/user.js"
import { getRepositories } from "./service/repositories.js"

import { user } from "./objects/userObjects.js"

import { screen } from "./objects/screen.js"

async function getUserData(userName) {
   const userResponse = await getUser(userName)

   if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
   }
    
   const repositoriesResponse = await getRepositories(userName)

   user.setInfo(userResponse)
   user.setRepositories(repositoriesResponse)

   screen.renderUser(user)
    
}
document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value

    if(validationEmptyInput(userName)) return
    getUserData(userName)
    
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{

    const userName = e.target.value
    const key = e.which || e.keyCode
    
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        
        if(validationEmptyInput(userName)) return

        getUserData(userName)
        
    }
    
})

function validationEmptyInput(userName){
    if(userName ===''){
        alert("Preencha o campo com o nome do usuário do GitHub.")
        return true
    }
}
