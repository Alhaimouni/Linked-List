'use strict';

class Node {

    constructor(value, next = null) {

        this.value = value;
        this.next = next;
    }

    insert() {
        console.log('inside insert');
    }

}


module.exports = Node;
