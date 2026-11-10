class Node {
    constructor(val, nxt) {
        this.value = val;
        this.nextNode = nxt;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.len = 0;
    }
    append(value) {
        let cur = this.head;
        while (cur.nextNode != null) {
            cur = cur.nextNode;
        }
        let newNode = new Node(value, cur.nextNode);
        cur.nextNode = newNode;
        this.len++;
    }
    prepend(value) {
        let newNode = new Node(value, this.head.nextNode);
        this.head.nextNode = newNode;
        this.len++;
    }
    size() {
        return this.len;
    }
    head() {
        let cur = this.head.nextNode;
        if (cur === null) {
            return undefined;
        } else {
            return cur.value;
        }
    }
    tail() {
        let cur = this.head;
        while (cur.nextNode != null) {
            cur = cur.nextNode;
        }
        if (cur === head) {
            cur = cur.nextNode;
        } else {
            return cur.value;
        }
    }
    at(index) {
        let cur = head;
        for (let i = 0; i < index; i++) {
            cur = cur.nextNode;
            if (cur === null) {
                break;
            }
        }
        if (pos === cur) {
            return undefined;
        } else {
            return cur.value;
        }
    }
    pop() {
        let cur = this.head.nextNode;
        if (cur === null) {
            return undefined;
        }
        this.head.nextNode = cur.nextNode;
        this.len--;
        return cur.value;
    }
    contains(value) {
        let cur = this.head.nextNode;
        while (cur != null) {
            if (cur.value === value) {
                return true;
            }
            cur = cur.nextNode;
        }
        return false;
    }
    findIndex(value) {
        let cur = this.head.nextNode, idx = 0;
        while (cur != null) {
            if (cur.value === value) {
                return idx;
            }
            cur = cur.nextNode;
            idx++;
        }
        return -1;
    }
    insertAt(index, ...values) {
        if (index < 0 || this.size() < index) {
            throw new RangeError();
        }
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.nextNode;
        }
        for (const value of values) {
            let newNode = new Node(value, cur.nextNode);
            cur.nextNode = newNode;
            cur = newNode;
            this.len++;
        }
    }
    removeAt(index) {
        if (index < 0 || this.size() <= index) {
            throw new RangeError();
        }
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.nextNode;
        }
        cur.nextNode = cur.nextNode.nextNode;
        this.len--;

    }
    toString() {
        let str = "", cur = this.head.nextNode;
        while (cur != null) {
            str += "( ";
            str += String(cur.value);
            str += " ) -> ";
            cur = cur.nextNode;
        }
        str += "null";
        return str;
    }
}
