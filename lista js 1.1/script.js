document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Por favor insira uma tarefa!')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value)}
                </span>
                <button class="delelte"> <i>
                Remover </i>
                </button>

            </div>
        
        `;
    }
    
}