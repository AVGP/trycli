var busybox = (function() {
    var self = {};
    var user = "guest", cwd = "/";

    self.pwd = function() { return "<p>" + cwd + "</p>"; };
    
    self.cd  = function(args) {
        console.log(args);
        if(args.length < 2) return "";
        
        if(args[1][0] == "/") cwd = args[1];
        else cwd += args[1];
        
        if(cwd.substr(-1) != "/") cwd = cwd + "/";
        return "";
    }
    
    self.clear = function(args, terminal) {
        var linesInTerminal = terminal.querySelectorAll("p");
        for(var i=0; i<linesInTerminal.length;i++) {
            terminal.removeChild(linesInTerminal[i]);
        }
    }

    return self;
})();