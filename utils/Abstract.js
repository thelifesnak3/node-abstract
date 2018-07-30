class Abstract {
    constructor(app, model, route) {
        this._app = app
        this._model = model
        this._route = route
        this.generateRoutes()
    }

    getAll(req, res) {
        return this._model
            .findAll()
            .then(data => {
                data.forEach(function(element) {
                console.log(element.dataValues)
                }, this);
            })
            .catch(error => {

                throw error
            })
    }

    getById(req, res){
        let id = parseInt(req.params.id)
        return this._model
            .findOne({ where: id })
            .then(data => console.log(data.dataValues))
            .catch(error => {

                throw error
            })
    }

    getByParam(req, res){
        return this._model
            .findAll({ where: req.body })
            .then(data => data)
            .catch(error => {

                throw error
            })
    }

    postCreate(req, res){
        return this._model
            .create(req.body)
            .then(data => data)
            .catch(error => {

                throw error
            })
    } 

    putUpdate(req, res){
        id = parseInt(req.params.id)

        return this._model
            .update(req.body, { where: id })
            .then(data => data)
            .catch(error => {

                throw error
            })

    }

    delete(req, res){
        id = parseInt(req.params.id)

        return this._model
            .destroy({ where: id })
            .then(data => data)
            .catch(error => {

                throw error
            })
    }

    generateRoutes(){
        this._app.get(`${this._route}`, (req, res) => this.getAll(req, res));
        this._app.get(`${this._route}/:id`, (req, res) => this.getById(req, res));
        this._app.post(`${this._route}/search`, (req, res) => this.getByParam(req, res));
        this._app.post(`${this._route}`, (req, res) => this.postCreate(req, res));
        this._app.put(`${this._route}/:id`,(req, res) =>  this.putUpdate(req, res));
        this._app.delete(`${this._route}/:id`,(req, res) =>  this.delete(req, res));
    }

}

exports.create = (app, base, model) => {
    return new Abstract(app, base, model)
}