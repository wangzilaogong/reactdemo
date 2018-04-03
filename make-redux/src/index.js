let appState = {
    title:{
        text:'React Redux Title',
        color:'red'
    },
    content:{
        text:'React Redux Content',
        color:'blue'
    }
}


function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

function stateChanger(state,action) { // dispatch action
    switch (action.type){
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break
        default:
            break
    }
}

function createStore(state,stateChanger) {
    const listeners = []
    const subscribe  = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) =>{stateChanger(state,action)
        listeners.forEach((listener) => listener())
    }

    return { getState , dispatch ,subscribe}
}


const store = createStore(appState,stateChanger)
store.subscribe(() =>renderApp(store.getState()))
console.log(store)
renderApp(store.getState())
store.dispatch({type:'UPDATE_TITLE_TEXT',text:'React Action'})
store.dispatch({type:'UPDATE_TITLE_COLOR',color:'green'})
