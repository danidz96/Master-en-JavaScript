var Project = require('../models/project');
var fs = require('fs');

var controller = {
    home: function (req, res) {
        return res.send({
            message: 'Soy el inicio'
        });
    },

    test: function (req, res) {
        return res.send({
            message: 'Soy el metodo o accion test del controlador de project'
        });
    },

    saveProject: function (req, res) {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //guardar en bbdd
        project.save((err, projectStored) => {
            if(err) return res.send({
                message: 'Error al guardar'
            });
            if(!projectStored) return res.send({
                message: 'No se ha podido guardar el proyecto'
            });
            
            return res.send({
                project: projectStored
            });
        });
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        if(projectId == null) {
            return res.send({
                message: 'El proyecto no existe'
            });
        }

        Project.findById(projectId, (err, project) => {
            if (err) return res.send({
                message: 'Error al devolver los datos.'
            });
            if (!project) return res.send({
                message: 'El proyecto no existe'
            });
            return res.send({
                project
            });
        });
    },

    getProjects : function (req, res) {
        Project.find({}).sort('-year').exec((err, projects) => {
            if (err) return res.send({
                message: 'Error al devolver los datos.'
            });
            if (!projects) return res.send({
                message: 'No hay proyectos para mostrar'
            });
            return res.send({
                projects
            });
        });
    },

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
            if (err) return res.send({
                message: 'Error al actualizar'
            });
            if (!projectUpdated) return res.send({
                message: 'No existe el proyecto'
            });
            return res.send({
                project: projectUpdated
            });
        });
    },

    deleteProject: function (req,res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if (err) return res.send({
                message: 'Error al eliminar'
            });
            if (!projectRemoved) return res.send({
                message: 'No existe el proyecto'
            });
            return res.send({
                project: projectRemoved
            });
        });
    },

    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var filename = 'Imagen no subida';

        if(req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            filename = fileSplit[1];
            var extSplit = filename.split('\.');
            var fileExt = extSplit[1];

            if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jepg' || fileExt === 'gif') {
               Project.findByIdAndUpdate(projectId, {image: filename}, {new:true}, (err, projectUpdated) => {
                if(err) return res.send({
                    message: 'La imagen no se ha subido'
                });

                if (!projectUpdated) return res.send({
                    message: 'No existe el proyecto'
                });

                return res.send({
                    project: projectUpdated
                });
            });
 
            } else {
                fs.unlink(filePath, (err) => {
                    return res.send({
                        message: 'La exensión no es válida'
                    });
                });
            }

        } else {
            return res.send({
                message: filename
            });
        }
    }
};

module.exports = controller;