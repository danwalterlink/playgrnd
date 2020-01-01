// current implementation:
function todoAPPswitch(state= initialState, action) {
  switch (ACTION_TYPE) {
    case 'SOME_ACTION':
      return actionValue;
    case 'OTHER_ACTION':
      return actionValue2;
  }
}
/**
 * 
 * @param {} state Expeccted someArry
 * @param {string} action 
 */
// current implementation using destructuring assignments
function todoAPP(state = initialState, action) {
  state['SOME_ACTION'] || Object.assign(state, newState)
  return {
    process() {},
    state() {}
  }
}
// invalid syntax as now (29.3.2019)
// using pattern matching
function todoAppWithPatternMAtching (state = initialState, action) {
  case (action) {
    when {type: 'set-visibility-filter', filter: visFilter} ->
      return {...state, visFilter}
    when {type: 'add-todo', text} ->
      return {...state, todos: [...state.todos, {text}]}
    when {type: 'toggle-todo', index} -> {
      return {
        ...state,
        todos: state.todos.map((todo, idx) => idx === index
          ? {...todo, done: !todo.done}
          : todo
        )
      }
    }
    when {} -> {} // ignore unknown actions
  }
}

let o = {
  name: 'fred',
  p: 12
}

function fn(param, ...rest) {
  let access = {
    string: (param) => name = param,
    object: ({name}) => name
  }

  return access[typeof(param)](param)
}

console.log(fn(o))
