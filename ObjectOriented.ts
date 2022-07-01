class Human {
    name: string = ''
    lastname: string = ''
    age: number = 0
 
    sayHello(){
      return "Hello Everyone" + this.name + " " + this.lastname + " and I'm " + this.age + " years old"  
    }
 }
 
 const user1: any = new Human()
 user1.name = 'Prayuay Huakud'
 user1.age = 65
 console.log(user1.sayHello()) 