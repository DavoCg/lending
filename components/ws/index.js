var components = require('adotcomponents');
var io = require('socket.io');
var _ = require('lodash');

module.exports = components.define({
    name: 'ws',
    required: ['server'],
    events:{
        '*::forward': function onForward(options, done){
            var channel = options.channel;
            var name = options.name;
            var content = options.content;
            this.forward(channel, name, content, done);
        }
    },
    init: function initWebsockets(done){
        this.io = io(this.server.server);
        this.channels = {};
        this.info('server upgraded, waiting for ws connections');
        return done();
    },
    addChannel: function addChannel(name, listeners){
        var self = this;
        this.info('new channel', name);
        this.channels[name] = this.io.of('/' + name);
        this.channels[name].on('connection', function onConnection(socket){
            self.info('new-client-' + name);
            _.each(listeners, addListener.bind(socket, name));
        });
    },
    forward: function forward(channel, name, content, done){
        this.info('WS forward', {name: name});
        this.channels[channel].emit(name, content);
        return done();
    }
});

/**
 * this -> socket
 * @param listener
 * @param channel
 */
function addListener(channel, listener){
    console.log(channel);
    this.on(listener.event, listener.fn.bind(null, channel));
}
