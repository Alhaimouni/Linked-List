'use strict';

const LinkedList = require('../LinkedList');


describe('LinkedList class testing', () => {

    it('Creating instance testing', () => {

        const linkedList = new LinkedList();

        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });

});


describe('Testing LinkedList insert method', () => {

    it('If linkedList is empty', () => {

        const linkedList = new LinkedList();

        linkedList.insert('a');
        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next).toBeNull();
    });

    it('If linkedList is full', () => {

        const linkedList = new LinkedList();

        linkedList.insert('a');
        linkedList.insert('b');
        linkedList.insert('c');
        expect(linkedList.head.value).toEqual('c');
        expect(linkedList.head.next.value).toEqual('b');
        
    });

})