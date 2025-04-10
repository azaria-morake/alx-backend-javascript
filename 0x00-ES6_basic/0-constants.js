/* Modify: 
-- function taskFirst to instantiate variables using const
-- function taskext Second to instantiate variables using let
*/

taskFirst = () => {
    const task = 'I prefer const when I can.';
    return task;
  }
  
getLast = () => {
    return ' is okay';
  }
  
taskNext = () => {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }