'use strict';

const LinkedList = require('../LinkedList');


describe('LinkedList class testing',()=>{

    it('Creating instance testing',()=>{

        const linkedList = new LinkedList();

        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });

});