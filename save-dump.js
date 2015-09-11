//alert('asdasdsd');

var ll = (function() {
  //alert('asdas123123d:');

  var newLinkedList = {};
  var head = null;
  var tail = null;
  var totalNode = 0;

  var link = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };

  function _getHead() {
    return head;
  }

  function _getTail() {
    return tail;
  }

  function _add() {
    var value = document.getElementById('txtArea').value;
    var newNode = {
      value : value,
      next : null
    };

    if (_getTail() === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    console.log(head);
    totalNode++;
    return tail;
  }

  function _get(number) {
    if (number < -1 || number >= totalNode) {
      return false;
    } else {
      if (number === 0) {
        //theres a node connecting to it
        return head;
      }

      //iterate through the linked list
      var curNode = head.next;
      for (var counter = 1; counter < number; counter++) {
        // found it return that Node
        if (counter === number) {
          return curNode;
        }
        curNode = curNode.next;
      }
    }
    return curNode;
  }

  function _remove(number) {
    var pNode = _get(number - 1 );

    var aNode = _get(number + 1);

    //user tries to remove node outside linked list
    if (number < 0 || number >= totalNode) {
      return false;

      //node to be removes is head
    } else {

      pNode.next = aNode;

      totalNode--;
      if ( number === 0) {
        head = pNode.next;
      }

      //set the tail to the last node that is not false
      if (_get(number) === tail) {
        tail = pNode;
      }
    }
  }

  function _insert(value,number) {
    // make a new node
    var newNode = {
      value : value,
      next : null
    };

    // console.log('new node : ', newNode);
    // Define current Node, previous Node
    var currentNode = _get(number);
    var previousNode = _get(number - 1);

    // cl('this is new node',previousNode);
    // if you want to insert a node to the beginning of the linkedList
    if ( number === 0 ) {
      // attach curNode newNode.next
      newNode.next = currentNode;

      // assign head to newNOde

      head = newNode;
    } else {
      // attach new node.next to current node
      newNode.next = currentNode;

      // attach previous node.next to new node
      previousNode.next = newNode;
    }

    // user tries to append node to end of linked list
    // compare number to TotalNode (length)

    cl('number', number);
    cl('total node', totalNode);
    if ( number < 0 || number >= totalNode ) {
      return false;
    }
    totalNode++;
  }
  return link;
}());


// let Enum = require('enum');

// export const FuelType = new Enum([
//   'gas',
//   'hybrid',
//   'stuff',
//   'more stuff',
//   ''
//   ]);