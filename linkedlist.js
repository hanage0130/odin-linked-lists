class Node {
    constructor(val, nxt) {
        this.value = val;
        this.nextNode = nxt;
    }
}

class LinkedList {
    constructor() {
        this.list = [new Node(null, 1), new Node(null, null)];
    }
    append(value) {
        let pos = 0;
        while (this.list[pos].nextNode != 1) {
            pos = this.list[pos].nextNode;
        }
        this.list.push(new Node(value, this.list[pos].nextNode));
        this.list[pos].nextNode = this.list.length - 1;
    }
    prepend(value) {
        this.list.push(new Node(value, this.list[0].nextNode));
        this.list[0].nextNode = this.list.length - 1;
    }
    head() {
        let pos = this.list[0].nextNode;
        if (pos === 1) {
            return undefined;
        } else {
            return this.list[pos].value;
        }
    }
    tail() {
        let pos = 0;
        while (this.list[pos].nextNode != 1) {
            pos = this.list[pos].nextNode;
        }
        if (pos === 0) {
            return undefined;
        } else {
            return this.list[pos].value;
        }
    }
    at(index) {
        let pos = 0;
        for (let i = 0; i < index; i++) {
            pos = this.list[pos].nextNode;
            if (pos === 1) {
                break;
            }
        }
        if (pos === 1) {
            return undefined;
        } else {
            return this.list[pos].value;
        }
    }
    pop() {
        const pos = this.list[0].nextNode;
        if (pos === 1) {
            return undefined;
        }
        this.list[0].nextNode = this.list[pos].nextNode;
        return this.list[pos].value;
    }
    contains(value) {
        let pos = this.list[0].nextNode;
        while (pos != 1) {
            if (this.list[pos].value === value) {
                return true;
            }
            pos = this.list[pos].nextNode;
        }
        return false;
    }
    findIndex(value) {
        let pos = this.list[0].nextNode, idx = 1;
        while (pos != 1) {
            if (this.list[pos].value === value) {
                return idx;
            }
            pos = this.list[pos].nextNode;
            idx++;
        }
        return -1;
    }
    insertAt(index, ...values) {
        let pos = this.at(index);
        if (pos === undefined) {
            
        }
    }
    toString() {
        let str = "", pos = this.list[0].nextNode;
        while (pos != 1) {
            str += "( ";
            str += String(this.list[pos].value);
            str += " ) -> ";
            pos = this.list[pos].nextNode;
        }
        str += "null";
        return str;
    }
    dump() {
        console.log(this.toString());
    }
}

const list = new LinkedList();

list.dump();
list.append(42);
list.dump();
list.prepend("Alex");
list.dump();