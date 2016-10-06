app.directive('component', function() {
   return {
       restrict: 'E',
       link: function(scope, element, attrs) {
         scope.type = attrs.type;
       },
       templateUrl: function(elem,attrs) {
           var c = mockappJson.components.filter(function(e){
             return e.name === attrs.type;
           });
           if(c && c.length){
              return c[0].path;
           } else {
             return "internal/component_not_installed.html"
           }
       }
   }
});
