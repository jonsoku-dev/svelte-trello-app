// node : html 에서 하나의 element
export function autoFocusout(el, focusoutListener) {
  const focusinListener = (event) => {
    // cancel the event bubbling
    event.stopPropagation()
  }

  setTimeout(() => {
    // 선택된 element 영역
    el.addEventListener('click', focusinListener)

    // 모든 영역
    window.addEventListener('click', focusoutListener)
  }) // javascript call stack

  return {
    // update() {},
    destroy() {
      el.removeEventListener('click', focusinListener)
      window.removeEventListener('click', focusoutListener)
    },
    edit(listId, title) {},
    remove(listId) {},
  }
}
