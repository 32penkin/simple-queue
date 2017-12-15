## Queue
 ###  Queue
 a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure.

 You can use methods of Queue such as:
 * enqueue(data) - for adding new node to your Queue (to the its end)
 * dequeue() - for removing the firs node of the Queue and returning it
 * also u can use next methods: getSize(), getFirst().

 ###  Example:

 To create a new Queue:
 ```sh
  const queue = new Queue();
  ```
  Now your Queue looks like:
  ```sh
  Queue { first: null, size: 0 }
  ```
  To add some data to the end of Queue:
  ```sh
  queue.enqueue('node1');
  queue.enqueue('node2');
  ```
  Now your Queue looks like:
  ```sh
  Queue {
  first: Node { data: 'node1', next: Node { data: 'node2', next: null } },
  size: 2 }
  ```
  To "dequeue" this Queue:
  ```sh
  queue.dequeue();
  ```
  Now your Queue looks like:
  ```sh
  Queue { first: Node { data: 'node2', next: null }, size: 1 }
  ```
  And dequeue() method will return:
  ```sh
  Node { data: 'node1', next: Node { data: 'node2', next: null } }
  ```
 ---
 
 
 
 
 \r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n`RkChoice` is a component which style depends or it's internal state. There are 4 states for this component:\r\n- unselected (base)\r\n- selected\r\n- unselected & disabled\r\n- selected & disabled\r\nEach of this state can be configured using `rkTypes`. That means you can define set of correctly named `RkType`s\r\nand `RkChoice` will apply them according to its state.\r\nUse the following convention:\r\n- `~name` : Unselected state.\r\n- `~nameSelected` : Selected state.\r\n- `~nameDisabled` : Unselected & disabled state.\r\n- `~nameSelectedDisabled`: Selected & disabled state.\r\nWhere `~name` is name of yours `rkType`.\r\nOne more note: during state change `RkChoice` not replace base `rkType` with new one. It just add correct.\r\nSo for example `disabled` component will have actually two `rkTypes` - base and disabled.\r\nTo define new `rkType` you can use predefined properties which will passed to according element inside component:\r\n\r\n
