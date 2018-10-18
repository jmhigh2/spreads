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

'global': {
        'server.socket_host': '0.0.0.0',
        'server.socket_port': int(os.environ.get('PORT', 8080)),
    },

'/static': {
 'tools.staticdir.on': True,
 'tools.staticdir.dir': './public'
}
}

cherrypy.quickstart(Index(), '/', conf)
