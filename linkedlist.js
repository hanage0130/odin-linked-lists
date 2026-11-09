class Node {
    constructor(val, nxt) {
        this.value = val;
        this.nextNode = nxt;
    }
}

class LinkedList {
    constructor() {
        this.list = [new Node(null, 1), new Node(null, null)];
        this.len = 0;
    }
    append(value) {
        let pos = 0;
        while (this.list[pos].nextNode != 1) {
            pos = this.list[pos].nextNode;
        }
        this.list.push(new Node(value, this.list[pos].nextNode));
        this.list[pos].nextNode = this.list.length - 1;
        this.len++;
    }
    prepend(value) {
        this.list.push(new Node(value, this.list[0].nextNode));
        this.list[0].nextNode = this.list.length - 1;
        this.len++;
    }
    size() {
        return this.len;
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
        this.len--;
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
        if (index < 0 || this.size() < index) {
            throw new RangeError();
        }
        let pos = 0;
        for (let i = 0; i < index; i++) {
            pos = this.list[pos].nextNode;
        }
        for (const value of values) {
            this.list.push(new Node(value, this.list[pos].nextNode));
            this.list[pos].nextNode = this.list.length - 1;
            pos = this.list[pos].nextNode;
            this.len++;
        }
    }
    removeAt(index) {
        if (index < 0 || this.size() <= index) {
            throw new RangeError();
        }
        let pos = 0;
        for (let i = 0; i < index; i++) {
            pos = this.list[pos].nextNode;
        }
        this.list[pos].nextNode = this.list[this.list[pos].nextNode].nextNode;
        this.len--;
        return this.list[pos].value;

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
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("Alex");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
for (let i = 1; i <= list.size() + 1; i++) {
    console.log(list.at(i));
}
list.pop();
console.log(list.size());
console.log(list.head());
console.log(list.contains("Alex"));
console.log(list.contains("dog"));
console.log(list.findIndex("Steve"));
console.log(list.findIndex("cat"));
console.log(list.toString());
list.dump();
list.insertAt(0, "Alice");
list.dump();
// list.insertAt(-1, "Mario");
list.insertAt(1, "Mario", "Luigi", "Tanaka");
list.dump();
list.removeAt(0);
list.dump();
list.removeAt(4);
list.dump();