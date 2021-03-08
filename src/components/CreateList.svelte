<script>
    import {lists} from '~/store/list'

    lists.add({
        title: 'Jonsoku!'
    })
</script>

<div class="create-list">
    + Add another list
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