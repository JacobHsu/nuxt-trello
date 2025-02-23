import { defineStore } from 'pinia'
import boardData from '~/data/board.json'

export const useBoardStore = defineStore('boardStore', () => {
  const board = ref(boardData)

    function addColumn(columnName) {
      board.value.columns.push({
        name: columnName,
        tasks: [],
      });
    }

  return {
    board,
    addColumn,
  };
})
