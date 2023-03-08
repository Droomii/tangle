class Quantum<T> {
    private _entanglers: Set<(val: T) => void> = new Set();

    constructor(private _value: T) {
        this.set = this.set.bind(this);
    }

    set(newVal: T) {
        this._value = newVal;
        this._entanglers.forEach(v => v(newVal));
    }

    get value() {
        return this._value
    }

    tangle(setter: (val: T) => void) {
        this._entanglers.add(setter);
    }

    untangle(setter: (val: T) => void) {
        this._entanglers.delete(setter);
    }
}

export function quantify<T>(val: T) {
    if (val && typeof val === 'object') {
        return Object.entries(val)
    }

    return new Quantum<T>(val);
}

export default Quantum;