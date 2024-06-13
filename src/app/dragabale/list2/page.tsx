'use client'
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const data = [{id: 'item-0', content: 'item 0'},
    {id: 'item-1', content: 'item 1'},
    {id: 'item-2', content: 'item 2'},
    {id: 'item-3', content: 'item 3'},
    {id: 'item-4', content: 'item 4'},
    {id: 'item-5', content: 'item 5'},
    {id: 'item-6', content: 'item 6'},
    {id: 'item-7', content: 'item 7'},
    {id: 'item-8', content: 'item 8'},
    {id: 'item-9', content: 'item 9'}
]
 

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const DragLists = () => {
    const [items, setItems] = useState(data);
  
    const onDragEnd = (result) => {
        console.log("drag--",result)
      if (!result.destination) {
        return;
      }
  
      console.log("Items before reorder:", items);
      const reorderedItems:any = reorder(
        items,
        result.source.index,
        result.destination.index
      );
      console.log("Items after reorder:", reorderedItems);
  
      setItems(reorderedItems);
    };
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };
  
export default DragLists
