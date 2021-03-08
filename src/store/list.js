import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'
import _find from 'lodash/find'
import _remove from 'lodash/remove'

const repoLists = JSON.parse(window.localStorage.getItem('lists')) || []

const _lists = writable(repoLists)

_lists.subscribe(($lists) => {
  window.localStorage.setItem('lists', JSON.stringify($lists))
})

export const lists = {
  subscribe: _lists.subscribe,
  add(payload) {
    const { title } = payload
    _lists.update(($lists) => {
      $lists.push({
        id: uuidv4(),
        title,
        cards: [],
      })
      return $lists
    })
  },
  edit(payload) {
    const { listId, title } = payload
    _lists.update(($lists) => {
      // const foundList = $lists.find((l) => l.id === listId)
      const foundList = _find($lists, { id: listId })
      foundList.title = title
      return $lists
    })
  },
  remove(payload) {
    const { listId } = payload
    _lists.update(($lists) => {
      _remove($lists, { id: listId })
      return $lists
    })
  },
}
