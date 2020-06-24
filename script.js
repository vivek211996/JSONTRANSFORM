var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]

var a = input.shift();
var b = a.childrens.pop()        
var c=input.pop(); 
var d = c.childrens.pop() 
var e=d.childrens.pop()
var output=[a,b,c,d,e]
console.log(output)

/*console.log(a)// id 1
console.log(b)// id 2
console.log(c) //id3 
console.log(d)  //id4
console.log(e) // id 5*/
