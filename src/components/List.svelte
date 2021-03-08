<script>
    import CreateCard from '~/components/CreateCard.svelte'
    import ListTitle from "~/components/ListTitle.svelte";
    import Card from "~/components/Card.svelte";
    import {onMount} from "svelte";
    import Sortable from "sortablejs";
    import {cards} from "../store/list";

    export let list
    export let sortableLists

    let cardsEl
    let sortableCards

    function disableSortable(event) {
        // 자식에서
        // const dispatch = createEventDispatcher()
        // ...
        // dispatch('editMode', false)
        // 두번째 인자는 disableSortable 의 첫번째 인자의 detail 에 들어온다.
        // 즉, 여기서 event.detail 은 true/false 이다.
        sortableLists.option('disabled', event.detail) // for lists
        sortableCards.option('disabled', event.detail) // for lists
    }

    onMount(() => {
        sortableCards = new Sortable(cardsEl, {
            group: 'My cards',
            handle: '.card',
            delay: 50,
            animation: 0,
            forceFallback: true,
            onEnd(event) {
                console.log(event)
                cards.reorder({
                    fromListId: event.from.dataset.listId, // data-list-id={list.id} -> dataset.listId
                    toListId: event.to.dataset.listId,
                    oldIndex: event.oldIndex,
                    newIndex: event.newIndex,
                })
            }
        })
    })
</script>

<div class="list">
    <div class="list__inner">
        <div class="list__heading">
            <ListTitle {list} on:editMode={disableSortable}/>
            <p>
                {list.cards.length} cards
            </p>
        </div>
        <div
                data-list-id={list.id}
                bind:this={cardsEl}
                class="list__cards">
            {#each list.cards as card (card.id)}
                <Card {card} listId={list.id} on:editMode={disableSortable}/>
            {/each}
        </div>
        <CreateCard listId={list.id} on:editMode={disableSortable}/>
    </div>
</div>

<style lang="scss">
  .list {
    display: inline-block;
    width: 290px;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
    white-space: normal;
    margin: 0 4px;
    line-height: 20px;

    :global(&.sortable-ghost) {
      opacity: .2;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 4px;
      }
    }

    :global(&.sortable-chosen) {
      cursor: move;
    }

    .list__inner {
      display: flex;
      flex-direction: column;
      max-height: 100%;
      padding: 10px 8px;
      box-sizing: border-box;
      background: #ebecf0;
      border-radius: 4px;

      .list__heading {
        margin-bottom: 10px;

        p {
          color: #5e6c84;
          padding: 0 8px;
        }
      }

      .list__cards {
        overflow-x: hidden;
        overflow-y: auto;
        margin-bottom: 10px;
      }
    }
  }
</style>