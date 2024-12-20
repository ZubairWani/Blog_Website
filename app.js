const express = require ('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');



//Express App
const app = express();

//Connect to MongoBd
const dbUser = 'mongodb+srv://zubair:Zubair1231@cluster-node.zxi0k.mongodb.net/NodeJS-Practice?retryWrites=true&w=majority&appName=Cluster-Node';
mongoose.connect(dbUser)
.then((result)=> app.listen(3000) )
.catch((err)=> console.log(err))

//register view Engine
app.set('view engine', 'ejs');




//listen for requests
// app.listen(3000);

//MiddleWare
// app.use((req, res, next)=>{
//     console.log('New Request Made')
//     console.log('host:', req.hostname )
//     console.log('path:', req.path )
//     console.log('method:', req.method)
//     next();
// });
// app.use((req, res, next)=>{
//     console.log('In the next Middleware');
//     next();
// });


//Custom Middleware and Static Files
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//    const blog = new Blog({
//     title : 'new blog 2',
//     snippet: 'about my new blog',
//     body : 'more about my new blog'
    
//    });
   
//    blog.save()
//    .then((result)=>{
//     res.send(result)
//    })
//    .catch((err)=>{
//     console.log(err);
//    });
   
// });


// app.get('/all-blogs', (req, res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>[
//         console.log(err)
//     ]);
// })

// app.get('/single-blog', (req, res)=>{
//     Blog.findById('6735cf7a0f5244335468c879')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>[
//         console.log(err)
//     ]);
// })


//Routes
app.get('/', (req, res ) =>{
    res.redirect('/blogs')
});

app.get('/about', (req, res ) =>{
    res.render('about',  {title: 'About'})
});


//Blog Routes
app.use('/blogs', blogRoutes)



// 404 page
app.use((req, res) =>{
    res.render('404', {title: '404'})
});
