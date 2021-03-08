import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _cloneDeep from 'lodash/cloneDeep'

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
  reorder(payload) {
    const { oldIndex, newIndex } = payload
    _lists.update(($lists) => {
      const clone = _cloneDeep($lists[oldIndex]) // 원래 위치의 데이터를 잠시 복사한다.
      $lists.splice(oldIndex, 1) // 원래 위치의 데이터를 삭제한다.
      $lists.splice(newIndex, 0, clone) // 새로운 위치에 복사한 데이터를 끼워넣는다.
      return $lists
    })
  },
}

// 단지 하나의 객체 데이터.. (subscribe 메소드가 없으니까 !)
export const cards = {
  add(payload) {
    const { listId, title } = payload
    _lists.update(($lists) => {
      const foundList = _find($lists, { id: listId })
      foundList.cards.push({
        id: uuidv4(),
        title,
      })
      return $lists
    })
  },
  edit(payload) {
    const { listId, cardId, title } = payload
    _lists.update(($lists) => {
      const foundList = _find($lists, { id: listId })
      const foundCard = _find(foundList.cards, { id: cardId })
      foundCard.title = title
      return $lists
    })
  },
  remove(payload) {
    const { listId, cardId } = payload
    _lists.update(($lists) => {
      const foundList = _find($lists, { id: listId })
      _remove(foundList.cards, { id: cardId })
      return $lists
    })
  },
  reorder(payload) {
    const { fromListId, toListId, oldIndex, newIndex } = payload
    _lists.update(($lists) => {
      const fromList = _find($lists, { id: fromListId })
      // 같은 리스트에서 카드가 움직였을 때, fromListId == toListId 일테니까..
      const toList =
        fromListId === toListId ? fromList : _find($lists, { id: toListId })

      const clone = _cloneDeep(fromList.cards[oldIndex])
      fromList.cards.splice(oldIndex, 1)
      toList.cards.splice(newIndex, 0, clone)

      return $lists
    })
  },
}
