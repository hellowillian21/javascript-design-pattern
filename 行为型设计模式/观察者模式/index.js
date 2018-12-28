class Subject {
  constructor() {
    this.subs =[]
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

// 观察者
class Observer {
  update() {
    console.log('update')
  }
}

let subject = new Subject()
let ob = new Observer()
// 目标添加观察者
subject.addSub(ob)
subject.notify()