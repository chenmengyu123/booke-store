//获取轮播图数据
let http=require('http');
let url=require('url');
let sliders=require('./sliders');
let fs=require('fs');
function read(callback) {
  fs.readFile('./book.json','utf8',function (err, data) {
    if(err||data==''){
      return callback([])
    }else{
      callback(JSON.parse(data));
    }
  })
}
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback);
}
http.createServer(function (req, res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }else if(pathname=='/api/hot'){
    read(function (data) {
      let books=data.reverse().slice(0,9);
      res.end(JSON.stringify(books));
    })
  }else if(pathname=='/api/book'){
    let method=req.method;
    let id=parseInt(query.id);
    if(method==='GET'){
      if(id){
        read(function (books) {
          let book=books.find(item=>item.id==id);
          res.end(JSON.stringify(book));
        })
      }else{
        read(function (data) {
          res.end(JSON.stringify(data));
        })
      }
    }else if(method==='POST'){
      let str='';
      req.on('data',function (data) {
        str+=data;
      });
      req.on('end',function () {
        let book=JSON.parse(str);
        read(function (books) {
          book.id=book.length===0?1:books[books.length-1].id+1;
          books.push(book);
          write(books,function () {
            res.end(JSON.stringify(book));//添加成功后返回成功的项
          })
        })
      })
    }else if(method==='PUT'){
      let str='';
      req.on('data',function (chunk) {
        str+=chunk;
        console.log(str);
      });
      req.on('end',function () {
        let book=JSON.parse(str);
        read(function (books) {
          books=books.map(item=>{
            if(item.id==id){
              return book;
            }
            return item;
          });
          write(books,function () {
            console.log(book);
            res.end(JSON.stringify(book));
          })
        })
      })
    }else if(method==='DELETE'){
      read(function (books) {
        books=books.filter(item=>item.id!=id);
        write(books,function () {
          res.end(JSON.stringify({}));
        })
      })
    }
  }
}).listen(3000);
