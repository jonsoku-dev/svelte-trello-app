<script>
    import {lists} from '~/store/list'
    import List from '~/components/List.svelte'
    import CreateList from '~/components/CreateList.svelte'
    import Sortable from 'sortablejs'
    import {onMount} from 'svelte'

    let listsEl
    let sortableLists

    onMount(() => {
        sortableLists = new Sortable(listsEl, {
            group: 'My Lists',
            handle: '.list',
            delay: 50,
            animation: 0,
            forceFallback: true,
            onEnd(event) {
                console.log(event)
                // lists.reorder({
                //     oldIndex: event.oldIndex,
                //     newIndex: event.newIndex,
                // })
            }
        })
    })

</script>

<div class="list-container">
    <div class="lists" bind:this={listsEl}>
        {#each $lists as list (list.id)}
            <List {list}/>
        {/each}
    </div>
    <CreateList/>
</div>

<style lang="scss">
  .list-container {
    width: 100vw;
    height: calc(100vh - 40px);
    border: 10px solid red;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 30px;
    font-size: 0;
    white-space: nowrap;

    .lists {
      display: inline-block;
      height: 100%;
      border: 10px solid blue;
      box-sizing: border-box;
      white-space: nowrap;
      font-size: 0;
    }
  }
</style>