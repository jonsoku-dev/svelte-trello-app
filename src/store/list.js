import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

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
}
