var pubsub = (() => {
  var topics = {}
  function subscribe(topic, fn) {
    if(!topics[topic]) {
      topics[topic] = []
    }
    topics[topic].push(fn)
  }

  function publish(topic, ...args) {
    if(!topics[topic]) {
      return
    }
    for(let fn of topics[topic]) {
      fn(...args)
    }
  }
  return {
    subscribe,
    publish
  }
})()

// 订阅者A订阅了test事件
pubsub.subscribe('test', function(a, b) {
  console.log(a, b)
})

// 发布者B发布者了test事件
pubsub.publish('test', '123', 'hhh')
