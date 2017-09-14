let nextTodo = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  todo: { id: nextTodo++, text, isCompleted: false }
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER', filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO', id
})