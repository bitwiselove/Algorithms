function Queue() {
  this._queue = [];
}

Queue.prototype.enqueue = function(obj) {
  this._queue.push(obj);
}

Queue.prototype.dequeue = function() {
  if (!this.isEmpty())
    return this._queue.shift();
}

Queue.prototype.isEmpty = function() {
  return this._queue.length === 0
}
