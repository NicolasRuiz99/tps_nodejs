const express = require('express');
const hbs = require('hbs')
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render("home", {
        active: { home: true }
    })
})

app.get('#0', (req, res) => {
    res.render("pages", {
        active: { page: true }
    })
})

app.get('/portfolio', (req, res) => {
    res.render("portfolio", {
        active: {
            portfolio: true,
            portfolio_flex: true
        }
    })
})

app.get('/portfolio-alt', (req, res) => {
    res.render("portfolio-alt", {
        active: {
            portfolio: true,
            portfolio_alt: true
        }
    })
})

app.get('/portfolio-raw', (req, res) => {
    res.render("portfolio-raw", {
        active: {
            portfolio: true,
            portfolio_raw: true
        }
    })
})

app.get('/portfolio-masonry', (req, res) => {
    res.render("portfolio-masonry", {
        active: {
            portfolio: true,
            portfolio_masonry: true
        }
    })
})

app.get('/contact', (req, res) => {
    res.render("contact", {
        active: {
            contact: true
        }
    })
})

app.get('/blog', (req, res) => {
    res.render("blog", {
        active: {
            blog: true
        }
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        active: {
            page: true
        }
    })
})

app.get('/design-styles', (req, res) => {
    res.render('design-styles', {
        active: {
            page: true
        }
    })
})

app.get('/documentation', (req, res) => {
    res.render('documentation', {
        active: {
            page: true
        }
    })
})

app.get('/blog-post', (req, res) => {
    res.render('blog-post')
})

app.get('/portfolio-hover', (req, res) => {
    res.render('portfolio-hover')
})

app.get('/portfolio-item', (req, res) => {
    res.render('portfolio-item')
})

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port)
        //Listen recibe un callback y le paso una funcion
})