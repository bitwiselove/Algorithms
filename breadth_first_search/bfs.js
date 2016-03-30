'use strict';

const Queue = function() {
  this._items = [];
};

Queue.prototype.enqueue = function(obj) {
  this._items.push(obj);
};

Queue.prototype.dequeue = function() {
  return this._items.shift();
};

Queue.prototype.isEmpty = function() {
  return this._items.length === 0;
};

const bfs = function(graph, source) {
  const bfsInfo = [];

  for (let i = 0, gl = graph.length; i < gl; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;

  const queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();

    for (let i = 0, gu = graph[u].length; i < gu; i++) {
      const v = graph[u][i];

      if (bfsInfo[v].distance === null) {
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        bfsInfo[v].predecessor = u;
        queue.enqueue(v);
      }
    }
  }

  return bfsInfo;
};
