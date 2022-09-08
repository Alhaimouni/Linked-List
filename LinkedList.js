'use strict';

const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null
    }

    insert(value) {

        if (this.head) {

            const node = new Node(value);
            node.next = this.head;
            this.head = node;

        } else {

            const node = new Node(value);
            this.head = node;
            
        }

    }
}


module.exports = LinkedList;