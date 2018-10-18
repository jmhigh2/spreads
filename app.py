import cherrypy
import os

class Index(object):
    @cherrypy.expose
    def index(self):
        return open('index.html', 'r').read()


conf = {
'/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
},

'/static': {
 'tools.staticdir.on': True,
 'tools.staticdir.dir': './public'
}
}

#port = 8080
port = os.environ.get("PORT")

cherrypy.config.update({'server.socket_port': port})

cherrypy.quickstart(Index(), '/', conf)
