<script>
    import {lists} from '~/store/list'
    import {tick} from "svelte";
    import {autoFocusout} from "~/actions/autoFocusout";

    let isEditMode = false
    let title = ''
    let textareaEl

    function addList() {
        if (title.trim()) {
            lists.add({
                title
            })
        }
        title = ''
        offEditMode()
    }

    async function onEditMode() {
        isEditMode = true
        await tick()
        textareaEl && textareaEl.focus()
    }

    async function offEditMode() {
        isEditMode = false
        await tick()
    }
</script>

<div class="create-list">
    {#if isEditMode}
        <div use:autoFocusout={offEditMode} class="edit-mode">
            <label>
                <textarea
                        bind:value={title}
                        bind:this={textareaEl}
                        placeholder="Enter a title for this list ..."
                        on:keydown={event => {
                            event.key === 'Enter' && addList()
                            event.key==='Escape' && offEditMode()
                            event.key==='Esc' && offEditMode()
                        }}
                ></textarea>
            </label>
            <div class="actions">
                <div class="btn" on:click={addList}>
                    Add List
                </div>
                <div class="btn" on:click={offEditMode}>
                    Cancel
                </div>
            </div>
        </div>
    {:else}
        <div class="add-another-list" on:click={onEditMode}>
            + Add another list
        </div>
    {/if}
</div>

<style lang="scss">
  .create-list {
    white-space: normal;
    font-size: 16px;
    width: 290px;
    display: inline-block;
    padding: 10px 8px;
    vertical-align: top;
    background: rgba(#ebecf0, .6);
    margin: 0 4px;
    border-radius: 4px;
    line-height: 20px;
    cursor: pointer;
    transition: .2s;

    &:hover {
      background: #ebecf0;
    }
  }
</style>