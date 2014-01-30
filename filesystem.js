var filesystem = (function() {
    var self = {},
        cwd  = "/";
    
    var fileTree = {
    };
    
    self.pwd = function() {
        return cwd;
    }
    
    self.cd = function(path) {

    };
    
    return self;
})();