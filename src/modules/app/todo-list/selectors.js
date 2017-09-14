import { createSelectorCreator, defaultMemoize } from 'reselect'
import { isEqual } from 'lodash'

const createSelector = createSelectorCreator(defaultMemoize, isEqual)
const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isCompleted)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.isCompleted)
    default:
      return []
    }
  }
)